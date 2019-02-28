import { Component, Input } from '@angular/core';

@Component({
  selector: 'fd-product-menu',
  template: 'fundamentals product menu component mock'
})
export class ProductMenuMockComponent {
  @Input()
  control;

  @Input()
  items;
}
