import { TestBed } from '@angular/core/testing';

import { TranslateService } from './translate.service';
import { TestingModule } from '../../testing/testing.module';

describe('TranslateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [TestingModule]
  }));

  it('should be created', () => {
    const service: TranslateService = TestBed.get(TranslateService);
    expect(service).toBeTruthy();
  });
});
