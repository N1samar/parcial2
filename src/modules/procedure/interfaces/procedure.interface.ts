export interface IProcedure {
    Id_prod: number;
    Procedure: string;
    Type_Procedure: string;
  }
  
  export interface IProcedureCreate extends IProcedure {}
  
  export interface IProcedureUpdate extends Partial<IProcedureCreate> {}