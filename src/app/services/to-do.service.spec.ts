import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToDoService } from './to-do.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';

describe('ToDoService', () => {
  let httpSpy: jasmine.SpyObj<HttpClient>;
  let testSubject: ToDoService;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'delete',
      'put',
    ]);
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule, HttpClientModule],
      providers: [{ provide: HttpClient, useValue: httpSpy }],
    });
    testSubject = TestBed.inject(ToDoService);
  });

  it('should be created', () => {
    expect(testSubject).toBeTruthy();
  });

  describe('methods', () => {
    describe('addToDo', () => {
      it('should send a post request', () => {
        const dataMock = {
          name: 'foo',
          task: 'bar',
        };
        const result = testSubject.addToDo(dataMock);
        expect(httpSpy.post).toHaveBeenCalledOnceWith(
          'http://localhost:3000/toDo',
          dataMock
        );
      });
    });

    describe('getToDos', () => {
      it('should send a get request', () => {
        const result = testSubject.getToDos();
        expect(httpSpy.get).toHaveBeenCalledOnceWith(
          'http://localhost:3000/toDo'
        );
      });
    });

    describe('deleteToDo', () => {
      it('should send a delete request', () => {
        const idMock = 42;
        const result = testSubject.deleteToDo(idMock);
        expect(httpSpy.delete).toHaveBeenCalledOnceWith(
          `http://localhost:3000/toDo/${idMock}`
        );
      });
    });

    describe('updateToDo', () => {
      it('should send a put request request', () => {
        const dataMock = {
          id: 42,
          name: 'foo',
          task: 'bar',
        };
        const result = testSubject.updateToDo(dataMock.id, dataMock);
        expect(httpSpy.put).toHaveBeenCalledOnceWith(
          `http://localhost:3000/toDo/${dataMock.id}`,
          dataMock
        );
        expect(testSubject.updateToDo).toBeInstanceOf(Function);
      });
    });
  });
});
