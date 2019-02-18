import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  get translatedTexts() {
    return this.translate.i18n;
  }

}
