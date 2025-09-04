import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { Card } from "./card/card";
import { TitleComponent } from './title-component/title-component';

@Component({
  selector: 'app-root',
  // standalone:true,
  imports: [FormsModule,Card,TitleComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('first_angular_proyect');

  name = "Miguel";
  lastName = "Tamayo";
  age = 29;
  isActive = false ? "Activo" : "Inactivo"

  // property Binding
  imageURL = "https://images7.alphacoders.com/133/1338182.png";

  // Variables para los ejercicios de binding
  username = "Angular Student";

    // Habilitar o desabiulitar un boton con binging
  isDisable = false;
  onClick(){
  console.log("Boton Click");
  };

    // Agregando una imagen
  image2 = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg";

  // Cambiando el color dependiendo de una variable
  isRed = true;

  // Clases Dinamicas
  isActive1 = true;

  // Mostrar varias imagenes desde un array
  images = [
    "https://m.media-amazon.com/images/M/MV5BMjA5NzU2MDYzMF5BMl5BanBnXkFtZTcwODIzNDc3Mw@@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTk0NjcxOTE1MF5BMl5BanBnXkFtZTYwMjc0NTg3._V1_.jpg"
  ];

  // Event Binding

  // Mostrar Texto en Pantalla
  message = "";
  showMessage(){
    this.message = "Hola Angular";
  }

  // Capturar valor de un input
  inputValue = "";
  onInput(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  // Contador
  counter = 0;
  increment(){
    this.counter++
  }
  decrement(){
    this.counter > 0 && this.counter--
  }

  // Un Mini to do App

  tasks: string[] = [];

  addTask(task: string) {
    if (task.trim() !== "") {
      this.tasks.push(task);
    }
  }

  // Two way Binding
  // Para usar Two way binding hay que importar ngModel que viene en el modulo FormsModule
  name_twb = "Juan";
  age_twb = 20;
  isActive_twb = true;
  color_twb = 'rojo';
  colors_twb = ['rojo', 'verde', 'azul']


  // @Input()
  childMessage = '';
  handleChildEvent(msg: string) {
    this.childMessage = msg;
  }

  // Input del segundo ejemplo
  mensajedeltitle = '';
  eventoDelHijo(msg: string){
    this.mensajedeltitle = msg
  }
    
}

