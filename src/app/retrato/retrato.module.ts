import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UniqueComponent } from './pages/unique/unique.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UniqueComponent,
    NavbarComponent,
    MainPageComponent,
    ImagenesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    UniqueComponent,
    NavbarComponent,
    MainPageComponent,
    ImagenesComponent
  ]
})
export class RetratoModule { }
