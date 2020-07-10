import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  private items = new Array<{ nombre: string }>();
  private itemsSubject = new Subject<Array<{ nombre: string }>>();
  public itemsObservable$ = this.itemsSubject.asObservable();

  constructor() { }

  crearItem() {
    //agregar al arreglo
      this.items.push({ nombre: 'Ejemplo ' + this.items.length +1 });
      //next lo envia al observable
      this.itemsSubject.next(this.items);
  }

  eliminarItem(index: number) {
      this.items.splice(index, 1);
      this.itemsSubject.next(this.items);
  }

}
