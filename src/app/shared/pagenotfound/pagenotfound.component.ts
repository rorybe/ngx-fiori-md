import { Component } from '@angular/core';
import { TranslateService } from '../../core/services/translate.service';

@Component({
    selector: 'app-pagenotfound',
    templateUrl: './pagenotfound.component.html',
    styleUrls: ['./pagenotfound.component.scss']
})
export class PageNotFoundComponent {

    constructor(private readonly translate: TranslateService) { }

    get translatedTexts() {
        return this.translate.i18n;
    }
}
