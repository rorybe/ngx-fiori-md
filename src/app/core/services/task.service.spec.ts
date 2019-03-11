import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { TestingModule } from '../../testing/testing.module';

describe('TaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [TestingModule]
  }));

  it('should be created', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });
});
