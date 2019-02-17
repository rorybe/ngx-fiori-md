import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskpriority'
})
export class TaskpriorityPipe implements PipeTransform {

  transform(priority: string): string {
    switch (priority) {
      case 'High':
        return 'red';
      case 'Medium':
        return 'orange';
      case 'Low':
        return 'green';
      default:
    }
  }

}
