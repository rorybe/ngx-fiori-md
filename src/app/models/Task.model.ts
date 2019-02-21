import { TaskPriority } from './TaskPriority';
import { TaskName } from './TaskName';

interface Timestamp {
    seconds: number;
}

export interface Task {
    id: string;
    completionDeadLine: Timestamp;
    createdByName: string;
    createdOn: Timestamp;
    priority: TaskPriority;
    taskDefinitionName: TaskName;
    taskTitle: string;
    user: string;
    selected: boolean | null;
}
