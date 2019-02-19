import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '../services/translate.service';
import { ITask } from '../master/types';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() taskListSearchResults: ITask[];
  selectedTaskId: string | null;

  now = new Date().getTime();
  constructor(private router: Router, private translate: TranslateService) { }

  setSelectedTaskId(taskId: string) {
    this.selectedTaskId = taskId;
    this.router.navigate([`detail/${taskId}`]);
  }

  isActive(taskId: string): boolean {
    return taskId === this.selectedTaskId;
  }

  get translatedTexts() {
    return this.translate.i18n;
  }
}
