import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { TranslateService } from '../services/translate.service';
import { takeUntil, tap, pluck } from 'rxjs/operators';
import { TabId } from '../../models/TabId.model';
import { ActivatedRoute, Router } from '@angular/router';
// import { TabListComponent } from 'fundamental-ngx/lib/tabs/tab-list.component';

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

    /**
     * Detail view loading status
     */
    readonly loading$ = this.taskService.loading$;
    /**
     * Information tab loading status
     */
    readonly infoLoading$ = this.taskService.infoLoading$;
    /**
     * Comment tab loading status
     */
    readonly commentLoading$ = this.taskService.commentLoading$;
    /**
     * Active tabs in the context of the selected task
     */
    readonly activeTabs$ = this.taskService.activeTabs$;
    /**
     * Keeps track of the index of the selected tab
     */
    readonly tabIndex$ = new BehaviorSubject(0);
    readonly finalise$ = new Subject<void>();
    /**
     * Show / hide master (used in responsive views)
     */
    readonly showMaster$ = this.taskService.showMaster$;
    /**
     * Not found flag to show / hide not generic found page
     */
    showNotFound$ = new BehaviorSubject(false);
    /**
     * Lazy comments tab loading indicator
     */
    loadCommentsTab = false;
    /**
     * Lazy attachments tab loading indicator
     */
    loadAttachmentsTab = false;

    taskDetail$ = this.taskService.taskDetails$.pipe(
        takeUntil(this.finalise$),
        tap(taskDetail => {
            if (!taskDetail) {
                return this.showNotFound$.next(true);
            }
        })
    );

    constructor(
        private readonly router: Router,
        private readonly taskService: TaskService,
        private readonly translateService: TranslateService,
        private readonly route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        // If detail/:taskId route is matched, set the current
        // task ID (navigate to detail page by
        // hiding the master in responsive views)
        this.route.params.pipe(
            takeUntil(this.finalise$),
            pluck('taskId'),
        ).subscribe((taskId: string) => {
            if (taskId) {
                this.taskService.taskId$.next(taskId);
                this.showNotFound$.next(false);
            } else {
                this.showNotFound$.next(true);
            }
            this.taskService.showMaster$.next(false);
        });

        this.onTabChange();

        // Once we have a task ID and/or a selected tab,
        // load the task details
        combineLatest([this.taskService.taskId$, this.tabIndex$]).pipe(
            takeUntil(this.finalise$)
        ).subscribe(([tId, tInd]) => {
            this.taskService.load(tId, tInd);
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
        this.finalise$.next();
        this.finalise$.complete();
    }

}
