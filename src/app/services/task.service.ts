import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { CommentService } from './comment.service';
import { InfoService } from './info.service';
import { Task } from '../models/Task.model';
import { AttachmentService } from './attachment.service';
import { TaskName, AttachmentTabTasks, InfoTabTasks } from '../models/TaskName';
import { ActiveTab } from '../models/TabId';

import { ITask } from '../master/types';

@Injectable()
export class TaskService {

    loadCommentsTab = false;
    loadAttachmentsTab = false;

    taskId$ = new BehaviorSubject<string>(null);
    taskDetails$ = new Subject();
    loading$ = new BehaviorSubject<boolean>(true);
    activeTabs$ = new BehaviorSubject<ActiveTab>(new ActiveTab());
    commentLoading$ = this.commentService.loading$;


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
            // .pipe(takeUntil(this.finalise))
            .subscribe((taskDetails: Task) => {
                if (taskDetails) {
                    this.updateDisabledTabs(taskDetails.taskDefinitionName);
                    this.taskDetails$.next(taskDetails);
                    this.loading$.next(false);
                }
            });

        if (!tabIndex) {
            return;
        }
        this.serviceArray[tabIndex].load(taskId);
    }

    get taskList$(): Observable<Task[]> {
        return this.db.collection<Task>('taskheaders')
            .snapshotChanges()
            // .pipe(takeUntil(this.finalise))
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
        //reset loading flags, reset data
        this.taskDetails$.next(undefined);
        this.loading$.next(true);
        //call lower level resets here
    }
}
