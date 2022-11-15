import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjemploComponent } from './pages/ejemplo/ejemplo.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EjemploComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    EjemploComponent
  ]
})
export class RetratoModule { }
