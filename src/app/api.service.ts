/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InicioI } from '../../src/app/interfaces-login/loginI';
import { ResponseI } from './interfaces-login/respuestai';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiUrl = 'http://127.0.0.1:8000/api/lista_asistencia/';

  constructor(public http: HttpClient) {

  }

  acceso(form: InicioI): Observable<ResponseI> {
    const redir = this.apiUrl + 'auth';
    return this.http.post<ResponseI>(redir, form);

  }

  login(usuario: any){
    return this.http.get('http://127.0.0.1:8000/api/login?usuario='+usuario.usuario+'&password='+usuario.password).toPromise();
  }

  restablecer(usuario: any){
    return this.http.get('http://127.0.0.1:8000/api/recuperar?usuario='+usuario.usuario+'&password='+usuario.password).toPromise();
  }

  crearUsuario(usuario: any){
    return this.http.get('http://127.0.0.1:8000/api/crear?rut='+usuario.rut+'&usuario='+usuario.usuario+'&password='+usuario.password).toPromise();
  }



  listaAsistencia() {
    return this.http.get('http://127.0.0.1:8000/api/lista_asistencia/');
    //  return.getAlumno
  }

  datos<T>(url: string) {
    url = 'http://127.0.0.1:8000/api/lista_asistencia/';
    return this.http.get<T[]>(url);
  }

  cargarInfo() {
    const url = 'http://127.0.0.1:8000/api/lista_asistencia/';
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve(data);
      });
    });
  }

}
