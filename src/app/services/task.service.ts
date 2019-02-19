import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TaskService {
    currentTask = new BehaviorSubject<any>(null);

    constructor(private db: AngularFirestore) {
    }

    get taskList$() {
        return this.db.collection('taskheaders')
            .snapshotChanges()
            .pipe(map(actions => actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { ...data, id };
            })));
    }

    get selectedTask() {
        return this.currentTask.asObservable();
    }

    set selectedTask(value) {
        this.currentTask.next(value);
    }
}
