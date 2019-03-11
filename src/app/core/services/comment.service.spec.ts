import { TestBed } from '@angular/core/testing';
import { CommentService } from './comment.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { TestingModule } from '../../testing/testing.module';

// const FirestoreStub = {
//   collection: (name: string) => ({
//     doc: (_id: string) => ({
//       valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
//       set: (_d: any) => new Promise((resolve, _reject) => resolve()),
//     }),
//   }),
// };

describe('CommentService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [TestingModule]
        // providers: [{ provide: AngularFirestore, useValue: FirestoreStub }]
    }));

    it('should be created', () => {
        const service: CommentService = TestBed.get(CommentService);
        expect(service).toBeTruthy();
    });
});
