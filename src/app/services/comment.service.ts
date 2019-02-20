import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  currentTaskId$ = new BehaviorSubject<string>(null);
  comments$ = new BehaviorSubject<any>(undefined);
  loading$ = new BehaviorSubject<boolean>(true);

  constructor(private db: AngularFirestore) { }

  load(taskId: string) {
    if (this.currentTaskId$.value === taskId) {
      return;
    }
    this.db.collection(`taskheaders/${taskId}/comments`, r => r.orderBy('createdOn', 'desc'))
      // .doc(`taskheaders/${taskId}`).valueChanges()
      // .pipe(takeUntil(this.finalise))
      .valueChanges()
      .subscribe(comments => {
        if (comments) {
          this.comments$.next(comments);
          this.loading$.next(false);
        }
      });

    this.currentTaskId$.next(taskId);
  }

  reset() {
    //reset loading flags, reset data
    this.comments$.next(undefined);
    this.loading$.next(true);

  }

  // getComments(taskId) {

  // return this.db
  //   .collection(`taskheaders/${taskId}/comments`, r => r.orderBy('createdOn', 'desc'))
  //   .snapshotChanges()
  //   .pipe(map(actions => actions.map(a => {
  //     const data = a.payload.doc.data();
  //     const id = a.payload.doc.id;
  //     return { ...data, id };
  //   })));

  // get comments$() {
  //   return this.db
  //     .collection(`taskheaders/${this.taskId}/comments`, r => r.orderBy('createdOn', 'desc'))
  //     .snapshotChanges()
  //     .pipe(map(actions => actions.map(a => {
  //       const data = a.payload.doc.data();
  //       const id = a.payload.doc.id;
  //       return { ...data, id };
  //     })));

  // return this.db.collection(`taskheaders/gjImLKqDMuBy34WQrg9q/comments`)
  //   .snapshotChanges()
  //   .pipe(map(actions => actions.map(a => {
  //     const data = a.payload.doc.data();
  //     const id = a.payload.doc.id;
  //     return { ...data, id };
  //   })));


  // }
}

