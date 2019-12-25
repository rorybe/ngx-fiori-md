import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appTaskprioritycolour]'
})
export class TaskprioritycolourDirective implements AfterViewInit {

  @Input('appTaskprioritycolour')
  priority: string;

  constructor(private readonly el: ElementRef) { }

  ngAfterViewInit() {
    const styles = this.el.nativeElement.style;
    switch (this.priority) {
      case 'High':
        styles.color = 'red';
        break;
      case 'Medium':
        styles.color = 'orange';
        break;
      case 'Low':
        styles.color = 'green';
        break;
      default:
        break;
    }
  }
}
