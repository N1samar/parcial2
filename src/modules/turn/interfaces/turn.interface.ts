export interface ITurn {
  Id_turn: number;
  Num_turn: string;
}

export interface ITurnCreate extends ITurn {}

export interface ITurnUpdate extends Partial<ITurnCreate> {}
