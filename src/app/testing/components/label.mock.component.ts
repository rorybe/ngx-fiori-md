import { Component, Input } from '@angular/core';

@Component({
  selector: 'fd-label',
  template: 'fundamentals label component mock'
})
export class LabelMockComponent {
  @Input()
  isStatusLabel;

  @Input()
  statusIcon;
}
