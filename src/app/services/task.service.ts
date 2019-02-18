import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';

import MockFirebase from 'mock-cloud-firestore';
import { fixtureData, snapshot } from '../mocks/firestoretaskheader.mock';


@Injectable()
export class TaskService {
    currentTask = new BehaviorSubject<any>(null);

    constructor(private db: AngularFirestore) {

        if (true !== true) {
            const firebaseMock = new MockFirebase(fixtureData);
            this.db = firebaseMock.firestore();
            // tslint:disable-next-line:no-string-literal
            this.db.collection('taskheaders')['__proto__'].snapshotChanges = () => {
                const snaps = snapshot.map(snap => {
                    // tslint:disable-next-line:no-string-literal
                    snap.payload.doc['id'] = snap.payload.doc._document.proto.name.split('/')[6];
                    // tslint:disable-next-line:no-string-literal
                    snap.payload.doc['data'] = () => {
                        const fields = snap.payload.doc._document.proto.fields;
                        return {
                            completionDeadLine: { seconds: new Date(fields.completionDeadLine.timestampValue).getTime() / 1000 },
                            createdByName: fields.createdByName.stringValue,
                            createdOn: { seconds: new Date(fields.createdOn.timestampValue).getTime() / 1000 },
                            priority: fields.priority.stringValue,
                            taskDefinitionName: fields.taskDefinitionName.stringValue,
                            taskTitle: fields.taskTitle.stringValue,
                            user: fields.user.stringValue
                        };
                    };
                    return snap;
                });
                return of(snaps);
            };
        }
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
