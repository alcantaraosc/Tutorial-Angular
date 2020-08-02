import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hijo-comp',
  templateUrl: './hijo-comp.component.html',
  styleUrls: ['./hijo-comp.component.css']
})
export class HijoCompComponent implements OnInit, OnDestroy {

  mensaje: string;
  nombreSuscription: Subscription;

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.nombreSuscription = this.dataService.nombre$.subscribe( texto => {
      console.log('hijo:', texto);
      this.mensaje = texto;
    });
  }

  ngOnDestroy(): void{
    this.nombreSuscription.unsubscribe();
  }

}
