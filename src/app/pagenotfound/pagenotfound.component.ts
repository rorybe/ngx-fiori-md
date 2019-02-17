import { Component, OnInit, Input, Inject } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Component({
    selector: 'app-pagenotfound',
    templateUrl: './pagenotfound.component.html',
    styleUrls: ['./pagenotfound.component.scss']
})
export class PageNotFoundComponent implements OnInit {
    translate: TranslateService;
    constructor(translate: TranslateService) { }

    ngOnInit() {
    }

}
