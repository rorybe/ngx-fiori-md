import { Component } from '@angular/core';
import { TranslateService } from '../services/translate.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent {

  loading$ = new BehaviorSubject<boolean>(true);

  constructor(private translateService: TranslateService) { }

  get translatedTexts(): Promise<{}> {
    return this.translateService.i18n;
  }

}
