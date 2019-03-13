import { AngularFirestore, QueryFn, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FirebaseApp, FirebaseFirestore } from 'angularfire2';
import { of, Observable } from 'rxjs';
export class FirestoreCollectionMock {

    snapshotChanges(): Observable<any> {
        return of();
    }

    valueChanges() {
        return of();
    }
}
