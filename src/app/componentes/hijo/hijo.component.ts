import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent  {

  @Input() textoHijo: string;

  private _textoHijo: string;
  @Input()
  set textoHijoSet(value: string){
    value = value || '';
    this._textoHijo = value.toUpperCase();
  }

  get textoHijoGet(){
    return this._textoHijo;
  }



   @Output() enviar : EventEmitter<string> = new EventEmitter<string>();
  textoHijo2: string;

  botonClick(){
    this.enviar.emit(this.textoHijo2);

  }

 

}
