import { Component } from '@angular/core';
import { TranslateService } from '../services/translate.service';

/**
 * Attachments tab component in the Detail view
 */
@Component({
    selector: 'app-attachments',
    templateUrl: './attachments.component.html',
    styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent {

    constructor(private readonly translateService: TranslateService) { }

    /**
     * Returns translatable texts for current language (default English)
     */
    get translatedTexts() {
        return this.translateService.i18n;
    }

}
