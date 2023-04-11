import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoAddEditComponent } from './to-do-add-edit.component';

describe('ToDoAddEditComponent', () => {
  let component: ToDoAddEditComponent;
  let fixture: ComponentFixture<ToDoAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
