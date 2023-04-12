import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private _fb: FormBuilder) {
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
      console.log(this);
    }
  }
}
