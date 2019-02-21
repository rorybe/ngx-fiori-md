import { Pipe, PipeTransform } from '@angular/core';
import { TaskStatus } from '../models/TaskStatus';

const ONE_WEEK_IN_MS = 604800000;

@Pipe({
  name: 'taskduetext'
})

export class TaskDueTextPipe implements PipeTransform {

  transform(milliseconds: number, now: number): TaskStatus {
    if (milliseconds < now) {
      return TaskStatus.overdue;
    }

    if (milliseconds < (ONE_WEEK_IN_MS + now)) {
      return TaskStatus.expiring;
    }
  }
}
