import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListadoService } from '../services/listado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit, OnDestroy {
    //arreglo
    public items = [];    
    //subscription
    public subscription: Subscription;

    constructor(private listadoService: ListadoService) { }

    //cuando inicia el programa
    ngOnInit() {
        this.subscription = this.listadoService.itemsObservable$.subscribe((items: Array<{ nombre: string }>) => {
            this.items = items;
        });
    }

    //se detruye al finalizar
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    crearItem() {
        this.listadoService.crearItem();
    }

    eliminarItem(index: number) {
        this.listadoService.eliminarItem(index);
    }

}
