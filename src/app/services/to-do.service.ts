import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  constructor(private _http: HttpClient) {}

  addToDo(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/toDo', data);
  }

  getToDos(): Observable<any> {
    return this._http.get('http://localhost:3000/toDo');
  }

  deleteToDo(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/toDo/${id}`);
  }

  updateToDo(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/toDo/${id}`, data);
  }
}
