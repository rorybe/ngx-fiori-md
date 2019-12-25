import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TranslateService {
    i18n: { [key: string]: string } = {};
    lang = '';
    serviceFinalise = new Subject<void>();

    constructor(private readonly http: HttpClient) { }

    use(lang: string = 'en'): Observable<{ [key: string]: string }> {
        this.lang = lang;
        return this.http.get<{ [key: string]: string }>(`assets/i18n/${this.lang}.json`).pipe(
            tap(translation => this.i18n = Object.assign({}, translation || {}))
        );
    }

    unsubscribeService(): void {
        this.serviceFinalise.next();
        this.serviceFinalise.complete();
    }
}

