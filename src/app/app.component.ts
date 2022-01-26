import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pantalla de Carga', url: '/splash', icon: 'fast-food' },
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Alumno', url: '/alumnos', icon: 'skull' },
    { title: 'Asistencia', url: '/datos', icon: 'people' },
    { title: 'Cámara', url: '/camara', icon: 'camera' }
  ];
  constructor() {}
}
