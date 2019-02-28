import { Component, Input } from '@angular/core';

@Component({
  selector: 'fd-search-input',
  template: 'fundamentals search input component mock'
})
export class SearchInputMockComponent {
  @Input()
  inShellbar;

  @Input()
  dropdownValues;

  @Input()
  ngModel;

  @Input()
  searchFunction;

  @Input()
  compact;
}
