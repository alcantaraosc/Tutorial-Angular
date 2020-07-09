import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  nombre: string;
  edad:number = 40;
  sueldos: number[];

  constructor() {
    this.nombre = 'Rodriguez Pablo';
    this.edad = 40;
    this.sueldos = [1700, 1600, 1900]
   }

  ngOnInit(): void {
  }

}
