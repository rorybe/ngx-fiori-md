import { of, Subject, Observable } from 'rxjs';

export class TranslateMockService {
  i18n: any = {};
  lang = '';
  serviceFinalise = new Subject<void>();

  use(): Observable<{ [key: string]: string }> {
    return of();
  }

  unsubscribeService() { }

}
