export interface IClient {
    Id_cli: number;
  Name_cli: string;
  Type_id: string;
  Client: string;
  Type_client: string;
  }
  
  export interface IClientCreate extends IClient {}
  
  export interface IClientUpdate extends Partial<IClientCreate> {}