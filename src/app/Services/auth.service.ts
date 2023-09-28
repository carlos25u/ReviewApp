import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroment';
import { Auth } from '../Modelos/Auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false

  private endpoint:String = environment.endPoint
  private url:String = this.endpoint+"Usuarios/Login"

  constructor(private http: HttpClient) { }

  Login(auth: Auth): void{
    this.http.post<Auth>(`${this.url}`, auth)
    this.isLoggedIn = true
  }

  logout(): void{
    this.isLoggedIn = false
  }


}
