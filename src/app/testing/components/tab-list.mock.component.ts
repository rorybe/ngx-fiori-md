import { Component, QueryList, EventEmitter } from '@angular/core';
import { TabPanelComponent } from 'fundamental-ngx/lib/tabs/tabs.component';

@Component({
    selector: 'fd-tab-list',
    template: 'fundamentals tab list component mock'
})
export class TabListMockComponent {
    tabs: QueryList<TabPanelComponent>;
    tabChange: EventEmitter<any>;
    selected: TabPanelComponent;
}
