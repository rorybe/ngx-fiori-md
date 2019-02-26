import { Component, Input } from '@angular/core';

@Component({
  selector: 'fd-shellbar-actions',
  template: 'fundamentals shellbar actions component mock'
})
export class ShellbarActionsMockComponent  {
  @Input()
  user;

  @Input()
  userMenu;

  @Input()
  productSwitcher;

  // @Input()
  // label;

  @Input()
  notificationCount;
}
