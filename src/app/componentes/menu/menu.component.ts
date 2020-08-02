import { Component, OnInit } from '@angular/core';
import { DataService } from '../usando-evento-observable/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isAut: boolean=true;
  mensaje: string = 'Navbar!';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {  
    this.dataService.nombre$.subscribe(texto => {
      this.mensaje = texto;
      console.log('navbar: ', texto);
    });
    
  }

}
