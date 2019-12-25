import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TestingModule } from './testing/testing.module';
import { TranslateMockService } from './testing/services/translate.mock.service';
import { TranslateService } from './core/services/translate.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: TranslateService, useValue: TranslateMockService }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
