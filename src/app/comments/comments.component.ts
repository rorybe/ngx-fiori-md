import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../services/translate.service';
import { TaskService } from '../services/task.service';
import { tap, map } from 'rxjs/operators';
import { CommentService } from '../services/comment.service';

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

  get translatedTexts() {
    return this.translateService.i18n;
  }
}
