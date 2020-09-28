import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Checklist, ToDoList } from './checklist';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  baseUrl = "/"

  constructor(
    private http: HttpClient
  ) { }

  addTask(newTask: ToDoList): Observable<any> {
    return this.http.post(this.baseUrl + 'addTask', newTask);
  }

  getChecklist(): Observable<Checklist> {
    return this.http.get<Checklist>(this.baseUrl + 'checklist');
  }

  updateTask(updatedTask: ToDoList): Observable<any> {
    return this.http.post(this.baseUrl + 'updateTask', updatedTask);
  }

  deleteTask(taskToDel: string): Observable<any> {
    return this.http.delete(this.baseUrl + 'deleteTask/'  + taskToDel);
  }
}
