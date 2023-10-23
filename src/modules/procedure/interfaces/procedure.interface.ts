export interface IProcedure {
  id: number;
  procedure: string;
  typeProcedure: string;
}

export interface IProcedureCreate extends IProcedure {}
export interface IProcedureUpdate extends Partial<IProcedureCreate> {}
