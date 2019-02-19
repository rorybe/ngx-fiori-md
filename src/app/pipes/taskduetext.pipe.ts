import { Pipe, PipeTransform } from '@angular/core';

const ONE_WEEK_IN_MS = 604800000;

@Pipe({
  name: 'taskduetext'
})
export class TaskDueTextPipe implements PipeTransform {

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
