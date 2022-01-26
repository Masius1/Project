import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    path: 'datos',
    loadChildren: () => import('./datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./camara/camara.module').then( m => m.CamaraPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'abrir-camara',
    loadChildren: () => import('./abrir-camara/abrir-camara.module').then( m => m.AbrirCamaraPageModule)
  },
  {
    path: 'datos-estudiante',
    loadChildren: () => import('./datos-estudiante/datos-estudiante.module').then( m => m.DatosEstudiantePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'mi-asistencia',
    loadChildren: () => import('./mi-asistencia/mi-asistencia.module').then( m => m.MiAsistenciaPageModule)
  },
  {
    path: 'alumnos-api/:id_asistencia',
    loadChildren: () => import('./alumnos-api/alumnos-api.module').then( m => m.AlumnosApiPageModule)
  },
  {
    path: 'estudiantes',
    loadChildren: () => import('./estudiantes/estudiantes.module').then( m => m.EstudiantesPageModule)
  },
  {
    path: 'pagina-descarga',
    loadChildren: () => import('./pagina-descarga/pagina-descarga.module').then( m => m.PaginaDescargaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
