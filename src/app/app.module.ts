import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttrEventNgmodelComponent } from './componentes/attr-event-ngmodel/attr-event-ngmodel.component';
import { ApiService } from './servicios/api.service';

import { LoginComponent } from './componentes/login/login.component';
import { InputoutputComponent } from './componentes/inputoutput/inputoutput.component';
import { PadreComponent } from './componentes/padre/padre.component';
import { HijoComponent } from './componentes/hijo/hijo.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { PostsComponent } from './componentes/posts/posts.component';
import { FormComponent } from './componentes/form/form.component';
import { DirectivasComponent } from './componentes/directivas/directivas.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InterpolacionComponent } from './componentes/interpolacion/interpolacion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { InputComponent } from './componentes/input/input.component';
import { MessageInputComponent } from './componentes/message-input/message-input.component';
import { ListadoComponent } from './componentes/subject-observable-suscriptions/listado/listado.component';
import { ContadorComponent } from './componentes/subject-observable-suscriptions/contador/contador.component';
import { ListadoService } from './componentes/subject-observable-suscriptions/services/listado.service';
import { DataService } from './componentes/usando-evento-observable/services/data.service';
import { HomeComponent } from './componentes/usando-evento-observable/home/home.component';
import { HijoCompComponent } from './componentes/usando-evento-observable/hijo-comp/hijo-comp.component';




@NgModule({
  declarations: [
    AppComponent,    
    AttrEventNgmodelComponent, LoginComponent, InputoutputComponent, 
    PadreComponent, HijoComponent, UsuariosComponent, PostsComponent, 
    FormComponent, DirectivasComponent, MenuComponent, FooterComponent, 
    InterpolacionComponent, InicioComponent, InputComponent, MessageInputComponent, ListadoComponent, 
    ContadorComponent, HomeComponent, HijoCompComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // import HttpClientModule after BrowserModule.  
    HttpClientModule,  
    ReactiveFormsModule
  ],
  providers: [ApiService, ListadoService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
