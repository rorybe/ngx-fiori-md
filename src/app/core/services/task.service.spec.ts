import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { TestingModule } from '../../testing/testing.module';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

const taskId = '1';
const tabIndex = 1;

describe('TaskService', () => {
    let service: TaskService;
    let angularFirestore: AngularFirestore;
    let angularFirestoreCollection: AngularFirestoreCollection;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestingModule],
            // providers: [
            //     { provide: AngularFirestoreCollection, useValue: FirestoreCollectionMock }
            // ]
        });
        service = TestBed.get(TaskService);
        angularFirestore = TestBed.get(AngularFirestore);
        angularFirestoreCollection = TestBed.get(AngularFirestoreCollection);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should abort getting task data if no task ID is provided', () => {
        spyOn(angularFirestore, 'doc').and.callThrough();
        service.load(null, tabIndex);
        expect(angularFirestore.doc).not.toHaveBeenCalled();
    });

    it('should update disabled tabs on load of a selected task', () => {
        spyOn(angularFirestore, 'doc').and.callThrough();
        service.load(taskId, tabIndex);
        expect(angularFirestore.doc).toHaveBeenCalledWith(`taskheaders/${taskId}`);
    });
});
