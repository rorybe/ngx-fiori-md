import { of, BehaviorSubject, Subject } from 'rxjs';
import { ActiveTab } from '../../models/TabId.model';

export class TaskMockService {

  loadCommentsTab = false;
  loadAttachmentsTab = false;
  taskId$ = new BehaviorSubject<string>(null);
  taskDetails$ = new Subject();
  loading$ = new BehaviorSubject<boolean>(true);
  activeTabs$ = new BehaviorSubject<ActiveTab>(new ActiveTab());
  infoLoading$ = of(); // this.infoService.loading$;
  commentLoading$ = of(); // this.commentService.loading$;
  serviceFinalise: Subject<boolean> = new Subject();

  showMaster$ = new BehaviorSubject<boolean>(true);

  // constructor(
  //     private db: AngularFirestore,
  //     private infoService: InfoService,
  //     private commentService: CommentService,
  //     private attachmentService: AttachmentService
  // ) {}

  // serviceArray = [this.infoService, this.commentService, this.attachmentService /* add services here */];

  load(taskId: string, tabIndex: number) { }

  get taskList$()/* : Observable<Task[]>  */ {
    return of();
    // return this.db.collection<Task>('taskheaders')
    //     .snapshotChanges()
    //     .pipe(takeUntil(this.serviceFinalise))
    //     .pipe(map(actions => actions.map(a => {
    //         const data = a.payload.doc.data();
    //         const id = a.payload.doc.id;
    //         return { ...data, id };
    //     })));
  }

  updateDisabledTabs(taskName) { }

  reset() { }

  unsubscribeServices() { }

}
