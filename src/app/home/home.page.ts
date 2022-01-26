import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  alumnos;
  datos: any[]=[];
  constructor(public _services: ApiService ) {
    // eslint-disable-next-line no-underscore-dangle
    this._services.datos<any[]>('').subscribe(data =>{
      this.datos = data;

    }
       );
   }


  ngOnInit() {
  }

//   ionViewDidLoad(){
//     this.api.listaAsistencia()
//     .subscribe(
// (data) => {this.alumnos = data;},
// (error) =>{console.log(error);}
// );
//   }
}
