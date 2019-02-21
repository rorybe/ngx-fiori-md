import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '../services/translate.service';
import { TaskService } from '../services/task.service';
import { Task } from '../../models/Task.model';

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

    @Input() taskListSearchResults: Task[];
    selectedTaskId = this.taskService.taskId$;
    now = new Date().getTime();

    constructor(
        private router: Router,
        private translate: TranslateService,
        private taskService: TaskService) { }

    ngOnInit() {
        // @TODO fix route
        this.taskService.taskId$.next(this.router.url.split('/')[2]);
    }

    setSelectedTaskId(taskId: string): Promise<boolean> {
        this.taskService.taskId$.next(taskId);
        this.taskService.reset();
        // An example to show the Page Not Found component;
        if (taskId === 'yJHX8Utr4QFygHNcDfOL') {
            return this.router.navigate(['notfound']);
        }
        this.router.navigate(['detail', taskId]);
    }

    isActive(taskId: string): boolean {
        return taskId === this.selectedTaskId.value;
    }

    get translatedTexts() {
        return this.translate.i18n;
    }
}
