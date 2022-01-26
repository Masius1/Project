import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mi-asistencia',
  templateUrl: './mi-asistencia.page.html',
  styleUrls: ['./mi-asistencia.page.scss'],
})
export class MiAsistenciaPage implements OnInit {
  //dato: any;
  // alumnos;
  datos: any;
  // constructor(public _services: ApiService ) {
  //   // eslint-disable-next-line no-underscore-dangle
  //   this._services.datos<any[]>('').subscribe(data =>{
  //     this.datos = data;
  //   }
  //      );
  //  })
  constructor(private http: HttpClient) {
    //this.cargarInfo();
  }

  ngOnInit() {
    this.cargarDatos();

  }

  cargarDatos() {
    this.http.get('http://127.0.0.1:8000/api/lista_asistencia/')
      .subscribe(res => {
        this.datos = res;
        console.log(this.datos);

      }
      );
  }

//  cargarInfo(){
//    this.alumno.cargarInfo().then(data =>{
//this.dato=data;
//console.log(this.dato);
//    });
//  }
}
