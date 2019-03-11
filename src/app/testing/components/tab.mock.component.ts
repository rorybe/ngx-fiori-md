import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'fd-tab',
    template: 'fundamentals tab component mock'
})
export class TabMockComponent {
    @Input()
    disabled;
}
