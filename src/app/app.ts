import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Card } from "./card/card";

@Component({
  selector: 'app-root',
  imports: [Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first_angular_proyect');

  name = "Miguel";
  apellido = "Tamayo";
  age = 29;
  isActive = false ? "Activo" : "Inactivo"
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
}
