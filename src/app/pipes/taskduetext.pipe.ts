import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskduetext'
})
export class TaskDueTextPipe implements PipeTransform {

  transform(seconds: number, now: number): string {
    switch (true) {
      // ended in the past
      case seconds < now:
        return 'Overdue';
      // ending in the next week
      case seconds < (604800000 + now):
        return 'Expiring';
      default:
    }
  }
}
