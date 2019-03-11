import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterComponent } from './master.component';
import { TestingModule } from '../../testing/testing.module';
import { taskList } from '../../testing/mockdata/taskList.mock';
import { Task } from 'src/app/models/Task.model';

describe('MasterComponent', () => {
    let component: MasterComponent;
    let fixture: ComponentFixture<MasterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [TestingModule],
            declarations: [MasterComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MasterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should update task list when search term is provided', () => {
        component.taskList = taskList as any;
        component.searchTerm = 'approve';
        component.onSearchModelChange();
        expect(component.taskListSearchResults.length)
            .toBeLessThan(component.taskList.length);
    });

    it('should sort tasks descending by deadline date on first sort', () => {
        component.taskList = taskList as any;
        fixture.whenStable().then(() => {
            component.onSort();
            expect(component.sorted).toBeTruthy();
            expect(component.taskList[0].completionDeadLine.seconds)
                .toBeLessThan(component.taskList[1].completionDeadLine.seconds);
            expect(component.taskList[1].completionDeadLine.seconds)
                .toBeLessThan(component.taskList[2].completionDeadLine.seconds);
            expect(component.taskList[2].completionDeadLine.seconds)
                .toBeLessThan(component.taskList[3].completionDeadLine.seconds);
        });
    });
});
