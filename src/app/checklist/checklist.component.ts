import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';
import { Checklist, ToDoList } from '../checklist';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  checklistDetails: Checklist;

  constructor(
    private checklistService: ApisService
  ) { }

  ngOnInit(): void {
    this.getCheckList();
  }

  getCheckList() {
    this.checklistService.getChecklist().subscribe((data) => {
      console.log(data);

      this.checklistDetails = data;
    });
  }

  updateTaskDesc(todoList: ToDoList) {
    todoList.isEditable = false;
    this.checklistService.updateTask(todoList).subscribe((data) => {
      this.getCheckList();
    });
  }

  deleteTaskDesc(id: string) {
    if (this.checklistService.deleteTask(id).subscribe()) {
      this.getCheckList();
    }
  }

  addTaskDesc() {

  }
}
