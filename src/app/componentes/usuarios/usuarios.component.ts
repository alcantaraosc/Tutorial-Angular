import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private router: Router, private titulo: Title) { }

  ngOnInit(): void {
    this.titulo.setTitle('Usuario componente');
  }

  navegarHaciaPost(){
    //con este codigo envio al usuario a navegar hacia la url
    this.router.navigate(['posts']);
  }

  public guardarDatos(params:number): number {
    params=params+1;
    return params;
  }

}


