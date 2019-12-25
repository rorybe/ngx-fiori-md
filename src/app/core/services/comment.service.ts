import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CommentService {

    readonly currentTaskId$ = new BehaviorSubject('');
    readonly comments$ = new BehaviorSubject(undefined);
    readonly loading$ = new BehaviorSubject(true);
    readonly serviceFinalise = new Subject<void>();

    constructor(private readonly db: AngularFirestore) { }

    load(taskId: string): void {
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

    reset(): void {
        // reset loading flags, reset data
        this.comments$.next(undefined);
        this.loading$.next(true);
    }

    unsubscribeService(): void {
        this.serviceFinalise.next();
        this.serviceFinalise.complete();
    }

}

