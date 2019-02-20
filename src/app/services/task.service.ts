import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { CommentService } from './comment.service';
import { InfoService } from './info.service';
import { AttachmentService } from './attachment.service';

@Injectable()
export class TaskService {
    currentTask = new BehaviorSubject<any>(null);


    taskId$ = new BehaviorSubject<string>(null);

    taskDetails$ = new Subject();

    loadCommentsTab = false;
    loadAttachmentsTab = false;

    loading$ = new BehaviorSubject<boolean>(true);
    commentLoading$ = this.commentService.loading$;
    afsdb;

    constructor(
        private db: AngularFirestore,
        private infoService: InfoService,
        private commentService: CommentService,
        private attachmentService: AttachmentService
    ) {
    }

    serviceArray = [this.infoService, this.commentService, this.attachmentService];

    load(taskId: string, tabIndex: number) {
        if (!taskId) {
            return;
        }

        this.db.doc(`taskheaders/${taskId}`).valueChanges()
            // .pipe(takeUntil(this.finalise))
            .subscribe(taskDetails => {
                if (taskDetails) {
                    this.taskDetails$.next(taskDetails);
                    this.loading$.next(false);
                }
            });

        if (!tabIndex) {
            return;
        }
        this.serviceArray[tabIndex].load(taskId);
    }

    get taskList$() {
        return this.db.collection('taskheaders')
            .snapshotChanges()
            // .pipe(takeUntil(this.finalise))
            .pipe(map(actions => actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { ...data, id };
            })));
    }


    // return this.db.collection('taskheaders')
    //     .snapshotChanges()
    //     .pipe(map(actions => actions.map(a => {
    //         const data = a.payload.doc.data();
    //         const id = a.payload.doc.id;
    //         return { ...data, id };
    //     })));

    reset() {
        //reset loading flags, reset data
        this.taskDetails$.next(undefined);
        this.loading$.next(true);
        // call lower levelr esets here
    }
}
