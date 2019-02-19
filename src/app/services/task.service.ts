import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ITask } from '../master/types';

@Injectable()
export class TaskService {
    currentTask = new BehaviorSubject<ITask>(null);

    constructor(private db: AngularFirestore) {
    }

    // Now `data` is typed! Awesome.
    get taskList$(): Observable<ITask[]> {
        return this.db.collection<ITask>('taskheaders')
            .snapshotChanges()
            .pipe(map(actions => actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { ...data, id };
            })));
    }
}
