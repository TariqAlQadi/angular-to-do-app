import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToDoAddEditComponent } from './to-do-add-edit/to-do-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-to-do-app';

  constructor(private _dialog: MatDialog) {}

  openAddEditToDoForm() {
    this._dialog.open(ToDoAddEditComponent);
  }
}
