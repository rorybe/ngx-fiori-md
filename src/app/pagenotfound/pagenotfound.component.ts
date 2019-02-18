import { Component, OnInit, Input, Inject } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Component({
    selector: 'app-pagenotfound',
    templateUrl: './pagenotfound.component.html',
    styleUrls: ['./pagenotfound.component.scss']
})
export class PageNotFoundComponent implements OnInit {

    constructor(private translate: TranslateService) { }

    ngOnInit() {
    }

    get translatedTexts() {
        return this.translate.i18n;
    }
}
