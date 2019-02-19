import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { TranslateService } from '../services/translate.service';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { ITask } from './types';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  // @ViewChild('content') contentElRef: ElementRef;

  loading$ = new BehaviorSubject<boolean>(true);
  searchTerm = '';
  taskList: ITask[];
  taskListSearchResults: ITask[] = [];
  sorted = false;

  taskList$ = this.taskService.taskList$.pipe(map(tl => {
    if (tl) {
      this.taskListSearchResults = tl;
      this.taskList = tl;
      this.loading$.next(false);
      return tl;
    }
  }));

  constructor(
    private taskService: TaskService,
    private translate: TranslateService
  ) { }

  onSearchModelChange() {
    this.taskListSearchResults = this.taskList.filter(task =>
      task.taskTitle.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get translatedTexts() {
    return this.translate.i18n;
  }

  onSort(): boolean {
    if (!this.sorted) {
      this.taskListSearchResults = this.taskList.sort((a, b) =>
        b.completionDeadLine.milliseconds -
        a.completionDeadLine.milliseconds
      );
      return this.sorted = true;
    }

    return false;
  }
}
