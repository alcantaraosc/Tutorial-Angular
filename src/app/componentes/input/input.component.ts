import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public lstMessages: Observable<Message[]>; //string[]=["Hola mundo", "Pepe", "como esta", "Mi numero: 88197698"];

  constructor( private chatService: ApiService) { }

  ngOnInit(): void {
  }


  public getInfo() {
    this.lstMessages = this.chatService.getMessage();
    
  }



}
