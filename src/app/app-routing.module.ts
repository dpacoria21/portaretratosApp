import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './retrato/pages/navbar/navbar.component';
import { UniqueComponent } from './retrato/pages/unique/unique.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './retrato/pages/main-page/main-page.component';
import { ImagenesComponent } from './retrato/pages/imagenes/imagenes.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent
  },
  {
    path: 'imagen', component: UniqueComponent
  },
  {
    path: 'datos', component: ImagenesComponent
  },
  {
    path: '**', redirectTo: ''
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
