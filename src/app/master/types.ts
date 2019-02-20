type TPriority = 'High' | 'Medium' | 'Low';

interface ITimestamp {
  seconds: number;
}

export interface ITask {
  id: string;
  completionDeadLine: ITimestamp;
  createdByName: string;
  createdOn: ITimestamp;
  priority: TPriority;
  taskDefinitionName: string;
  taskTitle: string;
  user: string;
  selected: boolean | null;
}

export enum TaskStatus {
  overdue = 'Overdue',
  expiring = 'Expiring'
}

