import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TranslateService {
    i18n: any = {};
    lang = '';
    serviceFinalise: Subject<boolean> = new Subject();

    constructor(private http: HttpClient) { }

    use(lang: string): Promise<{}> {
        return new Promise<{}>((resolve, reject) => {
            this.lang = lang;
            const langPath = `assets/i18n/${lang || 'en'}.json`;
            this.http.get<{}>(langPath)
                .pipe(takeUntil(this.serviceFinalise))
                .subscribe(
                    translation => {
                        this.i18n = Object.assign({}, translation || {});
                        resolve(this.i18n);
                    },
                    error => {
                        this.i18n = {};
                        resolve(this.i18n);
                    }
                );
        });
    }

    unsubscribeService(): void {
        this.serviceFinalise.next(true);
        this.serviceFinalise.complete();
    }
}

