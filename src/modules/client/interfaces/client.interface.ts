export interface IClient {
  id: number;
  name: string;
  typeIdentification: string;
  identification: string;
  client: string;
  typeClient: string;
}

export interface IClientCreate extends Omit<IClient, 'id'> {}

export interface IClientUpdate extends Partial<IClientCreate> {}
