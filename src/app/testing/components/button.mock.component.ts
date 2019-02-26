import { Component, Input } from '@angular/core';

@Component({
  selector: 'button',
  template: 'button element mock'
})
export class ButtonMockComponent {
  @Input()
  fdType;

  @Input()
  glyph;

  @Input()
  options;

  @Input()
  size;
}
