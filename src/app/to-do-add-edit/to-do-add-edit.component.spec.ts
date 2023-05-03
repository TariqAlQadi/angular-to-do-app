import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDoAddEditComponent } from './to-do-add-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('ToDoAddEditComponent', () => {
  let component: ToDoAddEditComponent;
  let fixture: ComponentFixture<ToDoAddEditComponent>;
  let matDialogRef: MatDialogRef<ToDoAddEditComponent>;

  let core: CoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToDoAddEditComponent],
      imports: [HttpClientModule, MatSnackBarModule],
      providers: [
        CoreService,
        MatSnackBar,
        { provide: MatDialogRef, useValue: matDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
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
