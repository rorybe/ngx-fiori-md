import { AngularFirestore, QueryFn, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FirebaseApp, FirebaseFirestore } from 'angularfire2';
import { Observable, of } from 'rxjs';
export class FirestoreMock /* implements AngularFirestore */ {
    app: FirebaseApp;
    firestore: FirebaseFirestore;
    persistenceEnabled$: Observable<boolean>;

    collection<T>(path: string, queryFn?: QueryFn) {
        return this;
    }

    doc(path: string): any/* : AngularFirestoreDocument<T> */ {
        return this;
    }

    snapshotChanges() {
        return of();
    }

    valueChanges() {
        return of();
    }
}
