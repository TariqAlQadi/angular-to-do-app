import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToDoService } from '../services/to-do.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-to-do-add-edit',
  templateUrl: './to-do-add-edit.component.html',
  styleUrls: ['./to-do-add-edit.component.scss'],
})
export class ToDoAddEditComponent implements OnInit {
  //declare formGroup
  toDoForm: FormGroup;

  //declare/define categories
  categories: string[] = ['Cleaning', 'Buying', 'Work'];

  constructor(
    private _fb: FormBuilder,
    private _toDoService: ToDoService,
    private _dialogRef: MatDialogRef<ToDoAddEditComponent>, //to close dialog window
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    //define formGroup
    this.toDoForm = this._fb.group({
      //formControlNames
      name: '',
      task: '',
      date: '',
      category: '',
    });
  }

  ngOnInit(): void {
    this.toDoForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.toDoForm.valid) {
      if (this.data) {
        this._toDoService
          .updateToDo(this.data.id, this.toDoForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Updated To-Do succesfully!');
              this._dialogRef.close(true); //close dialoghere
            },
            error: console.log,
          });
      } else {
        this._toDoService.addToDo(this.toDoForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Added To-Do succesfully1');
            this._dialogRef.close(true); //close dialoghere
          },
          error: console.log,
        });
      }
    }
  }
}
