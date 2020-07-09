import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  textoPadre: string;
  textoPadre2: string;

  constructor() { }

  ngOnInit(): void {
  }

  input(event: string){
    this.textoPadre=event
  }

  recibirMensaje(mensaje: string){
    this.textoPadre2 = mensaje;
  }

}
