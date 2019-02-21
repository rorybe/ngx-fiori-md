import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AttachmentService {

    serviceFinalise: Subject<boolean> = new Subject();

    constructor() { }

    load() {
    }

    unsubscribeService(): void {
        this.serviceFinalise.next(true);
        this.serviceFinalise.complete();
    }
}
