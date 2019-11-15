import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasktoshowComponent } from './tasktoshow.component';

describe('TasktoshowComponent', () => {
  let component: TasktoshowComponent;
  let fixture: ComponentFixture<TasktoshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasktoshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasktoshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
