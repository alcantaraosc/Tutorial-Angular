import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {
  direccion: string="Maanagua";
  persona = {
    nombre: 'Oscar',
    apellido: 'Alcantara',
    edad: 36
  }

  constructor() { }

  ngOnInit(): void {
  }

  duplicarTexto(valor: string): string {
    return valor + valor;
  }

}
