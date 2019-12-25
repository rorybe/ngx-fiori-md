import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '../services/translate.service';
import { TaskService } from '../services/task.service';
import { Task } from '../../models/Task.model';

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent {

    @Input() taskListSearchResults: Task[];
    readonly selectedTaskId = this.taskService.taskId$;
    readonly now = new Date().getTime();

    constructor(
        private readonly router: Router,
        private readonly translate: TranslateService,
        private readonly taskService: TaskService
    ) { }

    setSelectedTaskId(taskId: string): Promise<boolean> {
        this.taskService.taskId$.next(taskId);
        this.taskService.reset();
        this.taskService.showMaster$.next(false);
        // An example to show the Page Not Found component
        if (!taskId || taskId === 'yJHX8Utr4QFygHNcDfOL') {
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
