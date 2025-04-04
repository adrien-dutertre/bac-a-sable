import { Component, OnInit } from '@angular/core';
import { EnteteComponent } from '../../components/entete/entete.component';
import { Task } from './task.interface';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-to-do',
  imports: [EnteteComponent, MatIconModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class ToDoComponent implements OnInit {
  //Variables
  taskList: Task[] = [];
  completion: number = 0;

  //Ajouter une tâche
  addTask(event: any, task: string): void {
    event.preventDefault();
    this.taskList.push({
      label: task,
      checked: false,
    });
    const form = document.getElementById('add-task') as HTMLFormElement;
    form.reset();
    this.saveData();
  }

  //Compléter la tâche
  onCheckboxChange(event: any, index: number): void {
     this.taskList[index].checked = event.target.checked;
     this.saveData();
  }

  //Supprimer une tâche
  deleteTask(index: number): void {
    this.taskList.splice(index, 1);
    this.saveData();
  }

  //Pourcentage de complétion
  completed(): void {
    const completedTaskList : number = this.taskList.filter( task => {
      return task.checked;
    }).length;
    this.completion = this.taskList.length > 0 ? Math.floor(( completedTaskList * 100 ) / this.taskList.length) : 0 ;
  }

  saveData(): void {
    this.completed();
    const data = JSON.stringify(this.taskList);
    localStorage.setItem("task-list", data);
  }

  loadData(): void {
    const data = localStorage.getItem("task-list");
    const JSONdata = data ? JSON.parse(data) : {};
    this.taskList = JSONdata;
  }

  ngOnInit(): void {
    this.loadData();
  }
}
