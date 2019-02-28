import { Component, Input } from '@angular/core';

@Component({
    selector: 'fd-icon',
    template: 'fundamentals icon component mock'
})
export class IconMockComponent {
    @Input()
    glyph;
}
