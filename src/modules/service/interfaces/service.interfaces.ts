export interface IService {
    Id_Serv: number;
  Date: Date;
  Ofice: string;
  Unit: string;
  Process: string;
  Sub_process: string;
  Time_service: string;
  State: string;
  }
  
  export interface IServiceCreate extends IService {}
  
  export interface IServiceUpdate extends Partial<IServiceCreate> {}