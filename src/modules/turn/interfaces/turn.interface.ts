export interface ITurn {
  id: number;
  numTurn: string;
}

export interface ITurnCreate extends Omit<ITurn, 'id'> {}

export interface ITurnUpdate extends Partial<ITurnCreate> {}
