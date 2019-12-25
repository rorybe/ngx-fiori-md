import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Task } from 'src/app/models/Task.model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  readonly currentTaskId$ = new BehaviorSubject('')
  readonly info$ = new BehaviorSubject<Task>(null);
  readonly loading$ = new BehaviorSubject(true);
  readonly serviceFinalise$ = new Subject<void>();

  constructor(private readonly db: AngularFirestore) { }

  load(taskId: string) {
    if (this.currentTaskId$.value === taskId) {
      return;
    }

    this.db.doc<Task>(`taskdetails/${taskId}`).valueChanges()
      .pipe(takeUntil(this.serviceFinalise$))
      .subscribe(taskInfo => {
        if (taskInfo) {
          this.info$.next(taskInfo);
          this.loading$.next(false);
        }
      });

    this.currentTaskId$.next(taskId);
  }

  get PurchaseOrderItems$(): Observable<any[]> {
    return this.db.collection(
      `taskdetails/${this.currentTaskId$.value}/purchaseitems`
    ).snapshotChanges().pipe(
      takeUntil(this.serviceFinalise$),
      map(actions => actions.map(a => a.payload.doc.data()))
    );
  }

  reset(): void {
    // reset loading flags, reset data
    this.info$.next(undefined);
    this.loading$.next(true);
  }

  unsubscribeService(): void {
    this.serviceFinalise$.next();
    this.serviceFinalise$.complete();
  }
}
