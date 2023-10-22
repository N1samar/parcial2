export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface IUserCreate extends Omit<IUser, 'id'> {}

export interface IUserUpdate extends Partial<IUserCreate> {}
