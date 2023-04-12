import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  constructor(private _http: HttpClient) {}

  addToDo(data: any) {
    return this._http.post('http://localhost:3000/toDo', data);
  }

  getToDos() {
    return this._http.get('http://localhost:3000/toDo');
  }
}
