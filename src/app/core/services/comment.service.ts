import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  currentTaskId$ = new BehaviorSubject<string>(null);
  comments$ = new BehaviorSubject<any>(undefined);
  loading$ = new BehaviorSubject<boolean>(true);
  serviceFinalise: Subject<boolean> = new Subject();

  constructor(private db: AngularFirestore) { }

  load(taskId: string) {
    if (this.currentTaskId$.value === taskId) {
      return;
    }
    this.db.collection(`taskheaders/${taskId}/comments`, r => r.orderBy('createdOn', 'desc'))
      .valueChanges()
      .pipe(takeUntil(this.serviceFinalise))
      .subscribe(comments => {
        if (comments) {
          this.comments$.next(comments);
          this.loading$.next(false);
        }
      });

    this.currentTaskId$.next(taskId);
  }

  reset() {
    // reset loading flags, reset data
    this.comments$.next(undefined);
    this.loading$.next(true);
  }

  unsubscribeService() {
    this.serviceFinalise.next(true);
    this.serviceFinalise.complete();
  }

}

