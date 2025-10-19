import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [],
  templateUrl: './labs.html',
  styleUrl: './labs.css'
})
export class Labs {
  welcome = 'Hola :)';
  tasks = [
    'Instalar Angular CLI',
    'Comprobar versión de npm',
    'Comprobar versión de Git',
    'Probar Angular'
  ];
  name = 'Mauricio';
  age = '15';
  disabled = true;
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Mauricio',
    age: '22',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  clickHandler() {
    alert('Hola :)');
  }

  changeHandler(event: Event) {
    console.log(event);
  }
}
