import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  welcome = 'Hola :)';
  tasks = [
    'Instalar Angular CLI',
    'Comprobar versión de npm',
    'Comprobar versión de Git',
    'Probar Angular'
  ]
}
