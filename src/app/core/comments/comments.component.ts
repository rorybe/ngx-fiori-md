import { Component } from '@angular/core';
import { TranslateService } from '../services/translate.service';
import { CommentService } from '../services/comment.service';

/**
 * Comments tab component in the Detail view
 */
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  loading$ = this.commentService.loading$;
  comments$ = this.commentService.comments$;

  constructor(
    private translateService: TranslateService,
    private commentService: CommentService) { }

  /**
   * Returns translatable texts for current language (default English)
   */
  get translatedTexts() {
    return this.translateService.i18n;
  }
}
