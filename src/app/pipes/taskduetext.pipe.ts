import { Pipe, PipeTransform } from '@angular/core';

import { TStatus } from '../master/types';

const ONE_WEEK_IN_MS = 604800000;

@Pipe({
  name: 'taskduetext'
})

export class TaskDueTextPipe implements PipeTransform {

  // I prefer to use if statements, it feels easier to follow.
  // Just a personal preference. A switch statement that is switching on `true`
  // doesn't make a whole lot of sense, though.
  transform(milliseconds: number, now: number): TStatus | null {
    if (milliseconds < now) {
      return 'Overdue';
    }

    // Since we are returning a TStatus
    // TS will warn us if we type anything except Expring or Overdue.
    if (milliseconds < (ONE_WEEK_IN_MS + now)) {
      return 'Expiring';
    }

    return null;
  }
}
