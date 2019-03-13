import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { TranslateService } from '../services/translate.service';
import { takeUntil, map } from 'rxjs/operators';
import { TabId } from '../../models/TabId.model';
import { Task } from '../../models/Task.model';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Detail view component
 */
@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
    @ViewChild('tabList') tabList;

    task$ = this.taskService.taskDetails$;
    task: Task;
    /**
     * Detail view loading status
     */
    loading$ = this.taskService.loading$;
    /**
     * Information tab loading status
     */
    infoLoading$ = this.taskService.infoLoading$;
    /**
     * Comment tab loading status
     */
    commentLoading$ = this.taskService.commentLoading$;
    /**
     * Active tabs in the context of the selected task
     */
    activeTabs$ = this.taskService.activeTabs$;
    /**
     * Keeps track of the index of the selected tab
     */
    tabIndex$ = new BehaviorSubject<number>(null);
    finalise$: Subject<boolean> = new Subject();
    /**
     * Show / hide master (used in responsive views)
     */
    showMaster$ = this.taskService.showMaster$;
    /**
     * Not found flag to show / hide not generic found page
     */
    showNotFound$ = new BehaviorSubject<boolean>(false);
    /**
     * Lazy comments tab loading indicator
     */
    loadCommentsTab = false;
    /**
     * Lazy attachments tab loading indicator
     */
    loadAttachmentsTab = false;

    constructor(
        private router: Router,
        private taskService: TaskService,
        private translateService: TranslateService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        // If detail/:taskId route is matched, set the current
        // task ID (navigate to detail page by
        // hiding the master in responsive views)
        this.route.paramMap.pipe(map(p => p.get('taskId')))
            .pipe(takeUntil(this.finalise$))
            .subscribe(taskId => {
                if (taskId) {
                    this.taskService.taskId$.next(taskId);
                    this.showNotFound$.next(false);
                } else {
                    this.task = { taskDefinitionName: ('Not Found') } as any;
                    this.showNotFound$.next(true);
                }
                this.taskService.showMaster$.next(false);
            });

        this.onTabChange();

        // Once we have a task ID and/or a selected tab,
        // load the task details
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

    /**
     * Returns translatable texts for current language (default English)
     */
    get translatedTexts() {
        return this.translateService.i18n;
    }

    /**
     * Navigate to root URL (show master if in responsive mode)
     */
    onNavBack(): void {
        this.router.navigate(['']);
        this.showMaster$.next(true);
    }

    /**
     * Event listener for tab changes
     */
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
