type TPriority = 'High' | 'Medium' | 'Low';

interface ITimestamp {
  milliseconds: number;
}

interface ITask {
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

export {
  ITask
};
