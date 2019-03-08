import { TaskDueTextPipe } from './taskduetext.pipe';
import { TaskStatus } from '../../models/TaskStatus';

describe('TaskDueTextPipe', () => {
    let pipe: TaskDueTextPipe;
    const ONE_WEEK_IN_MS = 604800000;

    beforeEach(() => {
        pipe = new TaskDueTextPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return Overdue if in the past', () => {
        expect(pipe.transform(1, 2)).toBe(TaskStatus.overdue);
    });

    it('should return Expiring if in overdue in the next week', () => {
        expect(pipe.transform(2, 1)).toBe(TaskStatus.expiring);
    });

    it('shouldn\t return a value if overdue in more than a week', () => {
        expect(pipe.transform(ONE_WEEK_IN_MS + 2, 1)).toBeUndefined();
    });
});
