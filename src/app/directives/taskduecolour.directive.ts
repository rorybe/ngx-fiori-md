import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

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
      case 'Overdue':
        styles.color = 'red';
        break;
      case 'Expiring':
        styles.color = 'orange';
        break;
      default:
        break;
    }
  }

}
