import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import * as XLSX from 'xlsx';
import { Client } from '../client/entities/client.entity';
import { Service } from '../service/entities/service.entity';
import { IUpload } from './interfaces/upload.interface';
import { Agent } from '../agent/entities/agent.entity';
import { Turn } from '../turn/entities/turn.entity';
import { Procedure } from '../procedure/entities/procedure.entity';

@Injectable()
export class UploadService {
  constructor(
    @InjectEntityManager() private readonly entityManager: EntityManager,
  ) {}
  async upload(file: Express.Multer.File): Promise<any> {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const sheet = workbook.Sheets['Table1'];
    const data = XLSX.utils.sheet_to_json(sheet) as IUpload[];

    for (const insertData of data) {
      await this.entityManager.transaction(
        async (transactionalEntityManager) => {
          const resultProcedure = await transactionalEntityManager.save(
            Procedure,
            {
              procedure: insertData.AGRUPAMIENTO,
              typeProcedure: insertData.TRAMITE,
            },
          );

          const resultService = await transactionalEntityManager.save(Service, {
            ofice: insertData.OFICINA,
            unit: insertData.SALA,
            process: insertData.PROCESO,
            subProcess: insertData.SUBPROCESO,
            timeService: insertData.TOTAL,
            state: insertData.ESTADO,
            procedure: { id: resultProcedure.id },
          });

          await transactionalEntityManager.save(Client, {
            name: insertData.NOMBRECLIENTE,
            typeIdentification: insertData.TIPOIDENTIFICACION,
            identification: insertData.IDENTIFICACION,
            client: insertData.CLIENTE,
            typeClient: insertData.TIPOCLIENTE,
            service: { id: resultService.id },
          });

          await transactionalEntityManager.save(Agent, {
            nameAgent: insertData.NOMBREUSUARIO,
            service: { id: resultService.id },
          });

          await transactionalEntityManager.save(Turn, {
            numTurn: insertData.NUMTURNO,
            service: { id: resultService.id },
          });
        },
      );
    }

    return 'ok';
  }
}
