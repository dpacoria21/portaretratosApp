import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent {

  constructor(private imagesService: ImagesService) { }


  getImagenes() {
    return this.imagesService.getImages();
  }
  

}
