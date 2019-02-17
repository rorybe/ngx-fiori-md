import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection
} from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TaskService {
    taskList$: AngularFirestoreCollection<any>;
    currentTask = new BehaviorSubject<any>(null);
    constructor(private db: AngularFirestore) {
        this.taskList$ = db.collection('taskheaders');
    }

    get taskList() {
        return this.taskList$
            .snapshotChanges()
            .pipe(map(actions => actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return {...data, id};
            })));
    }

    get selectedTask() {
        return this.currentTask.asObservable();
    }

    set selectedTask(value) {
        this.currentTask.next(value);
    }
}
