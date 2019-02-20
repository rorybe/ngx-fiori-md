import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable, Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { TranslateService } from '../services/translate.service';
import { takeUntil } from 'rxjs/operators';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  @ViewChild('tabList') tabList;

  task$ = this.taskService.taskDetails$;
  taskDoc: AngularFirestoreDocument<any>;
  loading$ = this.taskService.loading$;
  commentLoading$ = this.taskService.commentLoading$;

  loadCommentsTab = false;
  loadAttachmentsTab = false;

  currentTask = this.taskService.currentTask;

  finalise: Subject<boolean> = new Subject();

  tabIndex$ = new BehaviorSubject<number>(null);


  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private taskService: TaskService,
    private translateService: TranslateService,
  ) { }

  ngOnInit() {
    this.onTabChange();

    combineLatest(this.taskService.taskId$, this.tabIndex$).pipe(
      takeUntil(this.finalise))
      .subscribe(([tId, tInd]) => {
        this.taskService.load(tId, tInd); // this is bad. need to translate id's into somethign usabble (local method)
      });


    //chief check me also if I'm needed take until this bad boy
    // this.route.params.pipe(takeUntil(this.finalise)).subscribe(params => {
    // this.task$ = this.afs.doc(`taskheaders/${params.taskId}`).valueChanges();
    // this.loading = false;
    // });
  }


  get translatedTexts() {
    return this.translateService.i18n;
  }

  onTabChange() {
    const tabId = this.tabList &&
      this.tabList.selected &&
      this.tabList.selected.id
      ? this.tabList.selected.id : undefined;
    switch (tabId) {
      case 'infoTab':
        this.tabIndex$.next(0);
        break;
      case 'commentsTab':
        this.tabIndex$.next(1);
        // this.tabList.select('commentsTab');
        break;
      case 'attachmentsTab':
        this.tabIndex$.next(2);
        break;
      default:
        this.tabIndex$.next(0);
    }
  }


  ngOnDestroy() {
    this.finalise.next(true);
    this.finalise.complete();
  }

}
