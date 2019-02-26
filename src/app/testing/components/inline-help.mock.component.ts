import { Component, Input } from '@angular/core';

@Component({
  selector: 'fd-inline-help',
  template: 'fundamentals inline help component mock'
})
export class InlineHelpMockComponent {
  @Input()
  position;
}
