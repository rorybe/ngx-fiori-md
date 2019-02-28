import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  template: 'tile component mock'
})
export class AppTileMockComponent {
  @Input()
  taskListSearchResults;

}
