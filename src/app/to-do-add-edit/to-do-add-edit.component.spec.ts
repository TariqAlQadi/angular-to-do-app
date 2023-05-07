import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDoAddEditComponent } from './to-do-add-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

describe('ToDoAddEditComponent', () => {
  let component: ToDoAddEditComponent;
  let fixture: ComponentFixture<ToDoAddEditComponent>;
  let matDialogRef: MatDialogRef<ToDoAddEditComponent>;

  let core: CoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoAddEditComponent],
      imports: [
        HttpClientModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatInputModule,
      ],
      providers: [
        CoreService,
        MatSnackBar,
        { provide: MatDialogRef, useValue: matDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    core = TestBed.inject(CoreService);
    fixture = TestBed.createComponent(ToDoAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
