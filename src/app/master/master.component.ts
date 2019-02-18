import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { TranslateService } from '../services/translate.service';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  // @ViewChild('content') contentElRef: ElementRef;

  loading$ = new BehaviorSubject<boolean>(true);
  searchTerm = '';
  selectedElement;
  selectedId: string;

  dropdownValues = [
    // {text: 'Apple', callback: () => alert('Apple Clicked')}
  ];

  // taskList$: Observable<any[]>;
  taskList: any[];
  taskListSearchResults: any[] = [];

  taskList$ = this.taskService.taskList$.pipe(map(tl => {
    if (tl) {
      this.taskListSearchResults = tl;
      this.taskList = tl;
      this.loading$.next(false);
      return tl;
    }
  }));

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private db: AngularFirestore,
    private taskService: TaskService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    // this.taskList$ = this.task.taskList;
    // this.taskList$.subscribe(tasks => {
    //   this.taskListSearchResults = this.taskList = tasks;
    //   this.loading = false;
    // });
  }

  onSearchModelChange(d) {
    this.taskListSearchResults = this.taskList.filter(task =>
      task.taskTitle.toLowerCase().includes(d.toLowerCase())
    );
  }

  get translatedTexts() {
    return this.translate.i18n;
  }
}
