import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() taskListSearchResults: any[];
  selectedElement;
  now = new Date().getTime();
  constructor(private router: Router, private translate: TranslateService) { }

  ngOnInit() {
  }

  setMyClasses(taskId) {
    return taskId === this.router.url.split('/')[2] ? 'sapMLIBSelected' : '';
  }

  selectComponent(event: MouseEvent, taskId: string) {
    if (this.selectedElement) {
      this.selectedElement.classList.remove('sapMLIBSelected');
    }
    this.selectedElement = event.srcElement.closest('fd-tile');
    this.selectedElement.classList.add('sapMLIBSelected');
    this.router.navigate([taskId !== 'yJHX8Utr4QFygHNcDfOL' ? `detail/${taskId}` : 'notfound']);
    // .then(() => {
      // this.contentElRef.nativeElement.focus();
    // });
  }

}
