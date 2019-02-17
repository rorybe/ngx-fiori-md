import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class TranslateService {
  i18n: any = {};
  lang = '';
  constructor(private http: HttpClient) {}
  use(lang: string): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      this.lang = lang;
      const langPath = `assets/i18n/${lang || 'en'}.json`;
      this.http.get<{}>(langPath).subscribe(
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
}

