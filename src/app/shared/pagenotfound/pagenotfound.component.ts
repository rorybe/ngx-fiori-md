import { Component } from '@angular/core';
import { TranslateService } from '../../core/services/translate.service';

@Component({
    selector: 'app-pagenotfound',
    templateUrl: './pagenotfound.component.html',
    styleUrls: ['./pagenotfound.component.scss']
})
export class PageNotFoundComponent {

    constructor(private translate: TranslateService) { }

    get translatedTexts(): Promise<{}> {
        return this.translate.i18n;
    }
}
