import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { TranslateService } from '../services/translate.service';
import { takeUntil, map } from 'rxjs/operators';
import { TabId } from '../../models/TabId.model';
import { Task } from '../../models/Task.model';
import { ActivatedRoute, Router } from '@angular/router';

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
  infoLoading$ = this.taskService.infoLoading$;
  commentLoading$ = this.taskService.commentLoading$;
  activeTabs$ = this.taskService.activeTabs$;
  tabIndex$ = new BehaviorSubject<number>(null);
  finalise$: Subject<boolean> = new Subject();

  showMaster$ = this.taskService.showMaster$;

  loadCommentsTab = false;
  loadAttachmentsTab = false;

  constructor(
    private router: Router,
    private taskService: TaskService,
    private translateService: TranslateService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(map(p => p.get('taskId')))
      .pipe(takeUntil(this.finalise$))
      .subscribe(taskId => {
        this.taskService.taskId$.next(taskId);
        this.taskService.showMaster$.next(false);
      });

    this.onTabChange();

    combineLatest(this.taskService.taskId$, this.tabIndex$).pipe(
      takeUntil(this.finalise$))
      .subscribe(([tId, tInd]) => {
        this.taskService.load(tId, tInd);
      });

    this.taskService.taskDetails$.pipe(takeUntil(this.finalise$)).subscribe(taskDetail => {
      if (taskDetail) {
        return this.task = taskDetail as Task;
      }
      this.task = undefined;
    });
  }

  get translatedTexts(): Promise<{}> {
    return this.translateService.i18n;
  }

  onNavBack() {
    this.router.navigate(['']);
    this.showMaster$.next(true);
  }

  onTabChange(): void {
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

  ngOnDestroy(): void {
    this.finalise$.next(true);
    this.finalise$.complete();
  }

}
