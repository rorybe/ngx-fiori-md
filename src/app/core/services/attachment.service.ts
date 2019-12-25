import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AttachmentService {

    serviceFinalise = new Subject<void>();

    load() { }

    unsubscribeService(): void {
        this.serviceFinalise.next();
        this.serviceFinalise.complete();
    }
}
