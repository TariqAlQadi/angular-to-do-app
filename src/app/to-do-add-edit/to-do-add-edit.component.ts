import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToDoService } from '../services/to-do.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-to-do-add-edit',
  templateUrl: './to-do-add-edit.component.html',
  styleUrls: ['./to-do-add-edit.component.scss'],
})
export class ToDoAddEditComponent {
  //declare formGroup
  toDoForm: FormGroup;

  //declare/define categories
  categories: string[] = ['Cleaning', 'Buying', 'Work'];

  constructor(
    private _fb: FormBuilder,
    private _toDoService: ToDoService,
    private _dialogRef: DialogRef<ToDoAddEditComponent> //to close dialog window
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
  onFormSubmit() {
    if (this.toDoForm.valid) {
      this._toDoService.AddToDo(this.toDoForm.value).subscribe({
        next: (val: any) => {
          alert('todo added succes');
          this._dialogRef.close(); //close dialoghere
        },
        error: (error: any) => {
          console.error(error);
        },
      });
    }
  }
}
