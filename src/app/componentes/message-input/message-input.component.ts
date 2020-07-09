import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {

  //la variable texto es la que va a recibir el valor desde
  //el componente input
  @Input() texto: string;
  @Input() texto2: string;

  constructor() { }

  ngOnInit(): void {
  }

}
