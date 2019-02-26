import { of, BehaviorSubject, Subject } from 'rxjs';

export class TranslateMockService {
  i18n: any = {};
  lang = '';
  serviceFinalise: Subject<boolean> = new Subject();

  use(lang: string) {
    return new Promise(resolve => resolve({}));
  }

  unsubscribeService() { }

}
