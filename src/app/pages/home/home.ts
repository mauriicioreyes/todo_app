import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  tasks = signal([
    'Instalar Angular CLI',
    'Comprobar versión de npm',
    'Comprobar versión de Git',
    'Probar Angular'
  ]);

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index: number) {
    this.tasks.update( (tasks) => tasks.filter( (task, position) => position !== index));
  }
}
