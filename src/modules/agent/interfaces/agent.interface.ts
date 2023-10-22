export interface IAgent {
    Id_cli: number;
  Name_cli: string;
  Type_id: string;
  Client: string;
  Type_client: string;
  }
  
  export interface IAgentCreate extends IAgent {}
  
  export interface IAgentUpdate extends Partial<IAgentCreate> {}