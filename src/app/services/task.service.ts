import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection
} from 'angularfire2/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class TaskService {
    // tL$: AngularFirestoreCollection<any>;
    currentTask = new BehaviorSubject<any>(null);

    constructor(private db: AngularFirestore) {
        // this.taskList$ = db.collection('taskheaders');
    }

    get taskList$() {
        const taskList = this.db.collection('taskheaders')
            .snapshotChanges()
            .pipe(map(actions => actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { ...data, id };
            })));
        return taskList;
    }

    get selectedTask() {
        return this.currentTask.asObservable();
    }

    set selectedTask(value) {
        this.currentTask.next(value);
    }
}
