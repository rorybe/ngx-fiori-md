import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { CommentService } from './comment.service';
import { InfoService } from './info.service';
import { Task } from '../../models/Task.model';
import { AttachmentService } from './attachment.service';
import { TaskName, AttachmentTabTasks, InfoTabTasks } from '../../models/TaskName';
import { ActiveTab } from '../../models/TabId.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    loadCommentsTab = false;
    loadAttachmentsTab = false;

    readonly taskId$ = new BehaviorSubject('');
    readonly taskDetails$ = new Subject<Task>();
    readonly loading$ = new BehaviorSubject(true);
    readonly activeTabs$ = new BehaviorSubject(new ActiveTab());
    readonly infoLoading$ = this.infoService.loading$;
    readonly commentLoading$ = this.commentService.loading$;
    readonly serviceFinalise = new Subject<void>();

    readonly showMaster$ = new BehaviorSubject(true);

    constructor(
        private readonly db: AngularFirestore,
        private readonly infoService: InfoService,
        private readonly commentService: CommentService,
        private readonly attachmentService: AttachmentService
    ) { }

    serviceArray = [this.infoService, this.commentService, this.attachmentService /* add services here */];

    load(taskId: string, tabIndex: number): void {
        if (!taskId) {
            return;
        }
        // this was a separate call to give an example how
        // different data could be assigned to the detail view
        this.db.doc(`taskheaders/${taskId}`).valueChanges()
            .pipe(takeUntil(this.serviceFinalise))
            .subscribe((taskDetails: Task) => {
                this.taskDetails$.next(taskDetails);
                this.loading$.next(false);
                if (taskDetails) {
                    this.updateDisabledTabs(taskDetails.taskDefinitionName);
                }
            });

        if (tabIndex < 0) {
            return;
        }
        this.serviceArray[tabIndex].load(taskId);
    }

    get taskList$(): Observable<Task[]> {
        return this.db.collection<Task>('taskheaders')
            .snapshotChanges()
            .pipe(takeUntil(this.serviceFinalise))
            .pipe(map(actions => actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { ...data, id };
            })));
    }

    updateDisabledTabs(taskName: TaskName): void {
        const tabs = {
            infoTab: !InfoTabTasks.includes(taskName),
            commentsTab: !true,
            attachmentsTab: !AttachmentTabTasks.includes(taskName)
        };
        this.activeTabs$.next(tabs);
    }

    reset(): void {
        // reset loading flags, reset data
        this.taskDetails$.next(undefined);
        this.loading$.next(true);
    }

    unsubscribeServices(): void {
        this.serviceFinalise.next();
        this.serviceFinalise.complete();
        this.serviceArray.forEach(svc => svc.unsubscribeService());
    }
}
