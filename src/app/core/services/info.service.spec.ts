import { TestBed } from '@angular/core/testing';

import { InfoService } from './info.service';
import { TestingModule } from 'src/app/testing/testing.module';

describe('InfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [TestingModule]
  }));

  it('should be created', () => {
    const service: InfoService = TestBed.get(InfoService);
    expect(service).toBeTruthy();
  });
});
