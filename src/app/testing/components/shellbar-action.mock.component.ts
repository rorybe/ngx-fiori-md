import { Component, Input } from '@angular/core';
import { callbackify } from 'util';

@Component({
  selector: 'fd-shellbar-action',
  template: 'fundamentals shellbar action component mock'
})
export class ShellbarActionMockComponent  {
  @Input()
  label;

  @Input()
  glyph;

  @Input()
  callback;

  @Input()
  notificationCount;

  @Input()
  notificationLabel;
}
