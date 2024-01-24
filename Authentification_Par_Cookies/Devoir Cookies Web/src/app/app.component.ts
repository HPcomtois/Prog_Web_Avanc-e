import { Component } from '@angular/core';
import {lastValueFrom} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Devoir Cookie';
  baseUrl = "https://localhost:7009/api/";
  accountBaseUrl = this.baseUrl + "Account/";

  constructor(public http: HttpClient){}

  async Register(){
    let dataRegister = {
      email : "test@test.com",
      password : "Passw0rd!",
      passwordConfirm : "Passw0rd!"
    }
    let res = await lastValueFrom(this.http.post<any>(this.accountBaseUrl + 'Register', dataRegister))
    console.log(res);
  }

  async login(){
    let loginData = {
      username : "Michel",
      password: "Passw0rd!"
    }
    let res = await lastValueFrom(this.http.post<any>(this.accountBaseUrl + 'Login', loginData))
    console.log(res);
  }

  async logout(){
    let res = await lastValueFrom(this.http.get<any>(this.accountBaseUrl + 'logout'))
    console.log(res);
  }

  async public(){
    let res = await lastValueFrom(this.http.get<any>(this.accountBaseUrl + 'PublicData'))
    console.log(res);
  }

  async private(){
    let options = { withCredentials:true };
    let res = await lastValueFrom(this.http.get<any>(this.accountBaseUrl + 'PrivateData', options))
    console.log(res);
  }
}
