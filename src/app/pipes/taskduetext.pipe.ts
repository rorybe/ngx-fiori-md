import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskduetext'
})
export class TaskDueTextPipe implements PipeTransform {

  transform(seconds: number, now: number): string {
    switch (true) {
      // 1 week of seconds
      case seconds < now:
        return 'Overdue';
      case seconds + 604800 < now:
        return 'Expiring';
      default:
    }
  }

}
