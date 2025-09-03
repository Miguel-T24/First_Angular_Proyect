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

  isActive = true
}
