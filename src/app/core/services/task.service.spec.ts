import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { TestingModule } from '../../testing/testing.module';
import { taskList } from '../../testing/mockdata/taskList.mock';
import { FirestoreMock } from 'src/app/testing/services/firestore.mock.service';
import { AngularFirestore } from 'angularfire2/firestore';

const taskId = '1';
const tabIndex = 1;

describe('TaskService', () => {
    let service: TaskService;
    let angularFirestore: AngularFirestore;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestingModule],
            providers: [
                { provide: AngularFirestore, useValue: FirestoreMock }
            ]
        });
        service = TestBed.get(TaskService);
        angularFirestore = TestBed.get(AngularFirestore);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should abort getting task data if no task ID is provided', () => {
        const spy = jasmine.createSpyObj('AngularFirestore', ['doc']);
        service.load(null, tabIndex);
        expect(spy.doc).not.toHaveBeenCalled();
    });

    it('should update disabled tabs on load of a selected task', () => {
        spyOn(angularFirestore, 'doc').and.callThrough();
        service.load(taskId, null);
        expect(angularFirestore.doc).toHaveBeenCalledWith(`taskheaders/${taskId}`);
    });

    it('shouldn\'t call another service if there\'s no tab ID', () => {

    });

    // When getTaskList$ is called with taskheaders mockdata, id, and data pass back
    it('should ', () => {
    });
});
