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

@Injectable()
export class TaskService {

    loadCommentsTab = false;
    loadAttachmentsTab = false;

    taskId$ = new BehaviorSubject<string>(null);
    taskDetails$ = new Subject();
    loading$ = new BehaviorSubject<boolean>(true);
    activeTabs$ = new BehaviorSubject<ActiveTab>(new ActiveTab());
    infoLoading$ = this.infoService.loading$;
    commentLoading$ = this.commentService.loading$;
    serviceFinalise: Subject<boolean> = new Subject();


    constructor(
        private db: AngularFirestore,
        private infoService: InfoService,
        private commentService: CommentService,
        private attachmentService: AttachmentService
    ) {
    }

    serviceArray = [this.infoService, this.commentService, this.attachmentService /* add services here */];

    load(taskId: string, tabIndex: number) {
        if (!taskId) {
            return;
        }
        // this was a separate call to give an example how
        // different data could be assigned to the detail view
        this.db.doc(`taskheaders/${taskId}`).valueChanges()
            .pipe(takeUntil(this.serviceFinalise))
            .subscribe((taskDetails: Task) => {
                if (taskDetails) {
                    this.updateDisabledTabs(taskDetails.taskDefinitionName);
                    this.taskDetails$.next(taskDetails);
                    this.loading$.next(false);
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

    updateDisabledTabs(taskName: TaskName) {
        const tabs = {
            infoTab: !InfoTabTasks.includes(taskName),
            commentsTab: !true,
            attachmentsTab: !AttachmentTabTasks.includes(taskName)
        };
        this.activeTabs$.next(tabs);
    }

    reset() {
        // reset loading flags, reset data
        this.taskDetails$.next(undefined);
        this.loading$.next(true);
    }

    unsubscribeServices() {
        this.serviceFinalise.next(true);
        this.serviceFinalise.complete();
        this.serviceArray.forEach(svc => svc.unsubscribeService());
    }
}
