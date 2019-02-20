import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '../services/translate.service';
import { TaskService } from '../services/task.service';
import { ITask } from '../master/types';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  
  @Input() taskListSearchResults: ITask[];
  selectedTaskId = this.taskService.taskId$;
  now = new Date().getTime();

  constructor(
    private router: Router,
    private translate: TranslateService,
    private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.taskId$.next(this.router.url.split('/')[2]); // @TODO fix route
  }

  setSelectedTaskId(taskId: string) {
    this.taskService.taskId$.next(taskId);
    // An example to show the Page Not Found component;
    taskId = taskId === 'yJHX8Utr4QFygHNcDfOL' ? 'yJHX8Utr4QFygHNcDfOL' : taskId;
    this.router.navigate(['detail', taskId]);
  }

  isActive(taskId: string): boolean {
    return taskId === this.selectedTaskId.value;
  }

  get translatedTexts() {
    return this.translate.i18n;
  }
}
