import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentsComponent } from './attachments.component';
import { TestingModule } from '../../testing/testing.module';

describe('AttachmentsComponent', () => {
  let component: AttachmentsComponent;
  let fixture: ComponentFixture<AttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [AttachmentsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
