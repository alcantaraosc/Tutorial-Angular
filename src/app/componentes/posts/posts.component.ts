import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private router: Router, private titulo: Title) { }

  ngOnInit(): void {
    this.titulo.setTitle('Posts del Componente');
  }

  navegarHaciaUsuario(){
    this.router.navigate(['/usuarios']);
  }

}
