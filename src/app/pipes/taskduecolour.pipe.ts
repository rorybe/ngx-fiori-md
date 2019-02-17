import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskduecolour'
})
export class TaskduecolourPipe implements PipeTransform {

  transform(status: string): string {
    switch (status) {
      case 'Overdue':
        return 'red';
      case 'Expiring':
        return 'orange';
      default:
    }
  }

}
