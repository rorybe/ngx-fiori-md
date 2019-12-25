import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailComponent } from './detail.component';
import { TestingModule } from '../../../app/testing/testing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TaskService } from '../services/task.service';
import { PageNotFoundComponent } from '../../shared/pagenotfound/pagenotfound.component';
import { TabListMockComponent } from '../../testing/components/tab-list.mock.component';
import { TabListComponent } from 'fundamental-ngx/lib/tabs/tab-list.component';

const routes: Routes = [
  { path: ':taskId', component: DetailComponent }
];

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let activatedRoute: ActivatedRoute;
  let taskService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        TestingModule
      ],
      declarations: [DetailComponent, PageNotFoundComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.get(ActivatedRoute);
    taskService = TestBed.get(TaskService);
    activatedRoute.params = new BehaviorSubject({});
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve and set current task ID from route URL', () => {
    (activatedRoute.params as BehaviorSubject<any>).next({ taskId: '1' });
    let taskId;
    const sub = taskService.taskId$.subscribe(t => taskId = t);
    sub.unsubscribe();
    expect(taskId).toBe('1');
  });

  it('should select the first tab on load when a task ID is supplied in the route URL', () => {
    (activatedRoute.params as BehaviorSubject<any>).next({ taskId: '1' });
    let tabIndex;
    const sub = component.tabIndex$.subscribe(t => tabIndex = t);
    sub.unsubscribe();
    expect(tabIndex).toBe(0);
  });

  it('should select the first tab on load when an invalid tab ID is supplied', () => {
    component.tabList = TestBed.createComponent(TabListMockComponent).componentInstance as TabListComponent;
    component.tabList.selected = { id: 'invalidTab' } as any;
    component.onTabChange();
    let tabIndex;
    const sub = component.tabIndex$.subscribe(t => tabIndex = t);
    sub.unsubscribe();
    expect(tabIndex).toBe(0);
  });

  it('should select the first tab on load when an undefined tab ID is supplied', () => {
    component.tabList = TestBed.createComponent(TabListMockComponent).componentInstance as any;
    component.tabList.selected = { id: 'invalidTab' };
    component.onTabChange();
    let tabIndex;
    const sub = component.tabIndex$.subscribe(t => tabIndex = t);
    sub.unsubscribe();
    expect(tabIndex).toBe(0);
  });

  it('should call to load the current task\'s details on load when a task ID is supplied in the route URL', () => {
    spyOn(taskService, 'load').and.callThrough();
    (activatedRoute.params as BehaviorSubject<any>).next({ taskId: '1' });
    expect(taskService.load).toHaveBeenCalled();
  });

  it('should call to load the current task\'s details when the current task ID changes', () => {
    (activatedRoute.params as BehaviorSubject<any>).next({ taskId: '1' });
    spyOn(taskService, 'load').and.callThrough();
    (activatedRoute.params as BehaviorSubject<any>).next({ taskId: '2' });
    expect(taskService.load).toHaveBeenCalled();
  });

  it('should call to load the current task\'s details when the selected tab index changes', () => {
    (activatedRoute.params as BehaviorSubject<any>).next({ taskId: '1' });
    spyOn(taskService, 'load').and.callThrough();
    component.tabIndex$.next(1);
    expect(taskService.load).toHaveBeenCalled();
  });
});
