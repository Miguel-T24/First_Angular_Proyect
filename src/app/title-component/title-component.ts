import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-title-component',
  imports: [],
  templateUrl: './title-component.html',
  styleUrl: './title-component.css'
})
export class TitleComponent {
  @Input() title:String = 'El titulo desde el Hijo';
  @Input() content:string = "Esto es el contendo desde el hijo"
  @Output() mensaje = new EventEmitter<string>();

  clickMostrarMensaje(){
    this.mensaje.emit("Mandando el mensaje desde el Hijo");
  }
}
