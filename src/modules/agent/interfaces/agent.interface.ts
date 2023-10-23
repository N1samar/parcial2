export interface IAgent {
  id: number;
  nameAgent: string;
}

export interface IAgentCreate extends IAgent {}

export interface IAgentUpdate extends Partial<IAgentCreate> {}
