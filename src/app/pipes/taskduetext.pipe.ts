import { Pipe, PipeTransform } from '@angular/core';

const ONE_WEEK_IN_MS = 604800000;

@Pipe({
  name: 'taskduetext'
})
export class TaskDueTextPipe implements PipeTransform {

  // I prefer to use if statements, it feels easier to follow.
  // Just a personal preference. A switch statement that is switching on `true`
  // doesn't make a whole lot of sense, though.
  transform(milliseconds: number, now: number): string {
    if (milliseconds < now) {
      return 'Overdue';
    }

    if (milliseconds < (ONE_WEEK_IN_MS + now)) {
      return 'Expiring';
    }

    return '';
  }
}
