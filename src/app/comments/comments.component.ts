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

export class CommentsComponent implements OnInit {

  loading$ = this.commentService.loading$;
  comments$ = this.commentService.comments$;

  constructor(
    private translate: TranslateService,
    private commentService: CommentService) { }

  ngOnInit() {
  }

  get translatedTexts() {
    return this.translate.i18n;
  }

}
