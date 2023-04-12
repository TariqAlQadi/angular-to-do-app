import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToDoAddEditComponent } from './to-do-add-edit/to-do-add-edit.component';
import { ToDoService } from './services/to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-to-do-app';

  constructor(private _dialog: MatDialog, private _toDoService: ToDoService) {}

  ngOnInit(): void {
    this.getToDos();
  }

  openAddEditToDoForm() {
    this._dialog.open(ToDoAddEditComponent);
  }

  getToDos() {
    //returns observable
    this._toDoService.getToDos().subscribe({
      next: (res) => {},
      error: (error: any) => {
        console.error(error);
      },
    });
  }
}
