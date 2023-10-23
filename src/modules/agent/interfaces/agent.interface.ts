export interface IAgent {
  id: number;
  nameAgent: string;
  typeAgent: string;
}

export interface IAgentCreate extends IAgent {}

export interface IAgentUpdate extends Partial<IAgentCreate> {}
