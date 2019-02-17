import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  // @ViewChild('content') contentElRef: ElementRef;

  loading = true;
  searchTerm = '';
  selectedElement;
  selectedId: string;

  dropdownValues = [
      // {text: 'Apple', callback: () => alert('Apple Clicked')}
  ];

  taskList$: Observable<any[]>;
  taskList: any[];
  taskListSearchResults: any[] = [];
  // translate: TranslateService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private db: AngularFirestore,
    private task: TaskService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.taskList$ = this.task.taskList;
    this.taskList$.subscribe(function(tasks) {
      this.taskListSearchResults = this.taskList = tasks;
      this.loading = false;
    }.bind(this));
  }

  onSearchModelChange(d) {
    this.taskListSearchResults = this.taskList.filter(task =>
      task.taskTitle.toLowerCase().includes(d.toLowerCase())
    );
  }
}
