import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TileComponent } from './tile.component';
import { TestingModule } from 'src/app/testing/testing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

const taskId = '1';
const router = {
    navigate: jasmine.createSpy('navigate')
};

describe('TileComponent', () => {
    let component: TileComponent;
    let fixture: ComponentFixture<TileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, TestingModule],
            declarations: [TileComponent],
            providers: [
                { provide: Router, useValue: router },
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should navigate to the notfound route when there\'s no task ID for a task', () => {
        component.setSelectedTaskId(null);
        expect(router.navigate).toHaveBeenCalledWith(['notfound']);
    });

    it('should navigate to the detail route when there\'s a taskID', () => {
        component.setSelectedTaskId(taskId);
        expect(router.navigate).toHaveBeenCalledWith(['detail', taskId]);
    });
});
