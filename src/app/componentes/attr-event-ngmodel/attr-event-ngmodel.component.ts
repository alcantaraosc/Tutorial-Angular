import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-event-ngmodel',
  templateUrl: './attr-event-ngmodel.component.html',
  styleUrls: ['./attr-event-ngmodel.component.css']
})
export class AttrEventNgmodelComponent implements OnInit {

  public desactivado: boolean = false;
  public titulo: string = 'Oscar';
  public seleccion: string;


  constructor() { }

  ngOnInit(): void {
  }

  OnchangeValue(event):void{
    this.desactivado=!this.desactivado;
 
  }

  log(titulo){
    console.log(titulo);
  }
  

}
