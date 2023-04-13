import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToDoAddEditComponent } from './to-do-add-edit/to-do-add-edit.component';
import { ToDoService } from './services/to-do.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'task', 'date', 'category'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        console.log(this.dataSource);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
