import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TaskService } from '../services/task.service';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  task: Observable<any>;
  task$;
  taskDoc: AngularFirestoreDocument<any>;
  loading = true;
  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router,
    private service: TaskService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.task = this.afs.doc(`taskheaders/${params.taskId}`).valueChanges();
      this.loading = false;
    });
  }
}
