import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title="Formulario"

  constructor(private titulo: Title) { }

  ngOnInit(): void {
    this.titulo.setTitle('Formulario del Componente');
  }



  //declaracion de un formGroup
  mandoForm = new FormGroup({
    name: new FormControl(),
    series: new FormControl('The Mandalorian')

  });

  //metodo
  onFormSubmit(): void {
    console.log('name:' + this.mandoForm.get('name').value);
    console.log('Series: '+ this.mandoForm.get('series').value);

    console.log('name: '+ this.mandoForm.controls.name.value);
    console.log('series: ' + this.mandoForm.controls.series.value);

    alert(this.mandoForm.controls.series.value);
    alert(this.mandoForm.value.name);
    console.warn(this.mandoForm.value);
    
  }


}
