import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroment';
import { Usuarios } from '../Modelos/Usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private endpoint:String = environment.endPoint
  private url:String = this.endpoint+"Usuarios"

  constructor(private http:HttpClient) { }

  getAllUsuarios():Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(`${this.url}`)
  }

  getUsuario(id: number): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(`${this.url}/${id}`)
  }

  postUsuario(Usuarios: Usuarios):Observable<Usuarios>{
    return this.http.post<Usuarios>(`${this.url}`, Usuarios)
  }

  putUsuario(usuarioId:number, Usuarios: Usuarios):Observable<Usuarios>{
    return this.http.put<Usuarios>(`${this.url}${usuarioId}`, Usuarios)
  }

  DeleteUsuario(usuarioId:number):Observable<void>{
    return this.http.delete<void>(`${this.url}${usuarioId}`)
  }
}
