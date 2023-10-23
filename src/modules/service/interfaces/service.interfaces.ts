export interface IService {
  id: number;

  dateEntri: Date;

  ofice: string;

  unit: string;

  process: string;

  subProcess: string;

  timeService: string;

  state: boolean;
}

export interface IServiceCreate extends IService {}
export interface IServiceUpdate extends Partial<IServiceCreate> {}
