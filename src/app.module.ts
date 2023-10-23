import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ClientModule } from './modules/client/client.module';
import { ServiceModule } from './modules/service/service.module';
import { TurnModule } from './modules/turn/turn.module';
import { ProcedureModule } from './modules/procedure/procedure.module';
import { AgentModule } from './modules/agent/agent.module';
import { UploadModule } from './modules/upload/upload.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'parcial_2',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    AuthModule,
    ClientModule,
    ServiceModule,
    TurnModule,
    ProcedureModule,
    AgentModule,
    UploadModule,
  ],
})
export class AppModule {}
