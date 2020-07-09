
import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { PostsComponent } from './componentes/posts/posts.component';
import { FormComponent } from './componentes/form/form.component';
import { LoginComponent } from './componentes/login/login.component';
import { InterpolacionComponent } from './componentes/interpolacion/interpolacion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { InputComponent } from './componentes/input/input.component';
import { MessageInputComponent } from './componentes/message-input/message-input.component';

//reglas de ruteo
const routes: Routes = [
   //aqui le indico que  inicie (o redirigue) con el componente /usuarios
   { path: '', component: InicioComponent, pathMatch: 'full'},
   //{ path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'form', component: FormComponent},
  { path: 'post', component: PostsComponent},
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'interpolacion', component: InterpolacionComponent },   
  { path: 'Consultar/Clientes', component: UsuariosComponent},   
  { path: 'Llamar-Input', component: InputComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
