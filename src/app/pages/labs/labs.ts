import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.html',
  styleUrl: './labs.css'
})
export class Labs {
  welcome = 'Hola :)';
  tasks = signal([
    'Instalar Angular CLI',
    'Comprobar versión de npm',
    'Comprobar versión de Git',
    'Probar Angular'
  ]);
  name = signal('Mauricio');
  age = 15;
  disabled = true;
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  person = signal({
    name: 'Mauricio',
    age: 22,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  });

  clickHandler() {
    alert('Hola :)');
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  changeAge(event: Event) {
    // console.log(event);
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        age: parseInt(newValue, 10)
      }
    })
  }
}
