import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import { TaskStatus } from '../../models/TaskStatus';

@Directive({
  selector: '[appTaskduecolour]'
})
export class TaskduecolourDirective implements AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    const dueStatus = this.el.nativeElement.innerHTML.trim();
    const styles = this.el.nativeElement.style;
    switch (dueStatus) {
      case TaskStatus.overdue:
        styles.color = 'red';
        break;
      case TaskStatus.expiring:
        styles.color = 'orange';
        break;
      default:
        break;
    }
  }

}
