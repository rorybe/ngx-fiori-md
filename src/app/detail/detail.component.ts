import { Component, OnInit, ElementRef, ViewChild, OnDestroy, AfterViewInit, ViewChildren } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Subject, BehaviorSubject, combineLatest, forkJoin } from 'rxjs';
import { TranslateService } from '../services/translate.service';
import { takeUntil } from 'rxjs/operators';
import { TabId } from '../models/TabId';
import { Task } from '../models/Task.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  @ViewChild('tabList') tabList;

  task$ = this.taskService.taskDetails$;
  task: Task;
  loading$ = this.taskService.loading$;
  commentLoading$ = this.taskService.commentLoading$;
  activeTabs$ = this.taskService.activeTabs$;
  tabIndex$ = new BehaviorSubject<number>(null);
  finalise$: Subject<boolean> = new Subject();

  loadCommentsTab = false;
  loadAttachmentsTab = false;

  constructor(
    private taskService: TaskService,
    private translateService: TranslateService,
  ) { }

  ngOnInit() {
    this.onTabChange();

    combineLatest(this.taskService.taskId$, this.tabIndex$).pipe(
      takeUntil(this.finalise$))
      .subscribe(([tId, tInd]) => {
        this.taskService.load(tId, tInd); // this is bad. need to translate id's into somethign usabble (local method)
      });

    this.taskService.taskDetails$.pipe(takeUntil(this.finalise$)).subscribe(taskDetail => {
      if (taskDetail) {
        return this.task = taskDetail as Task;
      }
      this.task = undefined;
    });
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
      case TabId.infoTab:
        this.tabIndex$.next(0);
        break;
      case TabId.commentsTab:
        this.tabIndex$.next(1);
        break;
      case TabId.attachmentsTab:
        this.tabIndex$.next(2);
        break;
      default:
        this.tabIndex$.next(0);
    }
  }

  ngOnDestroy() {
    this.finalise$.next(true);
    this.finalise$.complete();
  }

}
