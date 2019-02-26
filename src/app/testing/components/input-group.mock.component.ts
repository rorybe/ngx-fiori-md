import { Component, Input } from '@angular/core';

@Component({
  selector: 'fd-input-group',
  template: 'fundamentals input group component mock'
})
export class InputGroupMockComponent {
  @Input()
  button;

  @Input()
  placeholder;

  @Input()
  addOnText;

  @Input()
  glyph;

  @Input()
  placement;
}
