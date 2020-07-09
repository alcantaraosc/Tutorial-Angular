import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public _user: UserService,
    private _api: ApiService
  ) { }

  ngOnInit(): void {
  }

  login(){
    const user = (document.querySelector("#user") as HTMLInputElement).value;
    const password =(document.querySelector('#password') as HTMLInputElement).value;
    this._api.login(user, password).subscribe(response => {
      
    })
  }

}
