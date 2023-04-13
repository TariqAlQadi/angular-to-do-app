import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToDoAddEditComponent } from './to-do-add-edit/to-do-add-edit.component';
import { ToDoService } from './services/to-do.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'task',
    'date',
    'category',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _toDoService: ToDoService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getToDos();
  }

  getToDos() {
    //returns observable
    this._toDoService.getToDos().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        console.log(this.dataSource);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  deleteToDo(id: number) {
    this._toDoService.deleteToDo(id).subscribe({
      next: (res) => {
        this.getToDos();
        this._coreService.openSnackBar('To-Do deleted!', 'done');
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openAddToDoForm() {
    const dialogRef = this._dialog.open(ToDoAddEditComponent);
    //for updating the table after post request
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getToDos();
        }
      },
    });
  }

  openEditToDoForm(data: any) {
    const dialogRef = this._dialog.open(ToDoAddEditComponent, { data });
    //for updating the table after put request
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getToDos();
        }
      },
    });
  }
}
