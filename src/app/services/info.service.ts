import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private db: AngularFirestore) { }

  load(taskId: string) {

    //   if (currTaskId !== this.currTaskId.value) {
    //   this.afs.doc(`taskdetails/${taskId}`).valueChanges()
    //           // .pipe(takeUntil(this.finalise))
    //           .subscribe(taskDetails => {
    //               if (taskDetails) {
    //                   this.taskDetails$.next(taskDetails);
    //                   this.loading$.next(false);
    //               }
    //           });
    // }
    //   // load me up
  }
}
