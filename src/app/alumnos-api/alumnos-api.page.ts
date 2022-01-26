import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alumnos-api',
  templateUrl: './alumnos-api.page.html',
  styleUrls: ['./alumnos-api.page.scss'],
})
export class AlumnosApiPage implements OnInit {

  alumnoID: string;
  alumno;

  constructor(private activatedRoute: ActivatedRoute,  private http: HttpClient) { }

  ngOnInit() {
    this.alumnoID = this.activatedRoute.snapshot.paramMap.get('id_asistencia');
    this.http.get(' http://127.0.0.1:8000/api/lista_asistencia/' + this.alumnoID)
      .subscribe((res) => {
        this.alumno = res;
        console.log(res);
      });
  }

}
