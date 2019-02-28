import { Component, Input } from '@angular/core';

@Component({
    selector: 'fd-tab',
    template: 'fundamentals tab component mock'
})
export class TabMockComponent {
    @Input()
    disabled;
}
