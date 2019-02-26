import { Component, Input } from '@angular/core';

@Component({
  selector: 'fd-loading-spinner',
  template: 'fundamentals loading spinner component mock'
})
export class LoadingSpinnerMockComponent {
  @Input()
  loading
}
