import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  currentTaskId$ = new BehaviorSubject<string>(null);
  info$ = new BehaviorSubject<any>(undefined);
  loading$ = new BehaviorSubject<boolean>(true);
  serviceFinalise: Subject<boolean> = new Subject();

  constructor(private db: AngularFirestore) { }

  load(taskId: string) {
    if (this.currentTaskId$.value === taskId) {
      return;
    }

    this.db.doc(`taskdetails/${taskId}`).valueChanges()
      .pipe(takeUntil(this.serviceFinalise))
      .subscribe((taskInfo) => {
        if (taskInfo) {
          this.info$.next(taskInfo);
          this.loading$.next(false);
        }
      });

    this.currentTaskId$.next(taskId);
  }

  get PurchaseOrderItems$(): Observable<any[]> {
    return this.db.collection(`taskdetails/${this.currentTaskId$.value}/purchaseitems`)
      .snapshotChanges()
      .pipe(takeUntil(this.serviceFinalise))
      .pipe(map(actions =>
        actions.map(a => {
          return a.payload.doc.data();
        }
        )));
  }

  reset(): void {
    // reset loading flags, reset data
    this.info$.next(undefined);
    this.loading$.next(true);
  }

  unsubscribeService(): void {
    this.serviceFinalise.next(true);
    this.serviceFinalise.complete();
  }
}
