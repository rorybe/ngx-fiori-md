import { Component, Input } from '@angular/core';

@Component({
    selector: 'span',
    template: 'span element mock'
})
export class SpanMockComponent {
    @Input()
    appTaskprioritycolour;
}
