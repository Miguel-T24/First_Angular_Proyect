import { Component, Input, Output, EventEmitter } from '@angular/core';

// Este es un componente Hijo, una card
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() title: string = 'Esto es el titulo';
  @Input() contenido: string = 'Esto es el contenido';
  @Output() clicked = new EventEmitter<string>();

  cuandoHacesClick(){
    console.log("Hiciste click");
    this.clicked.emit('El hijo mando el mensaje')
  }
}
