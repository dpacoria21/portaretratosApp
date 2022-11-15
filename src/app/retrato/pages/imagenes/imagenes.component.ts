import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent {

  myImage: string[] = [];

  constructor( private imagesService: ImagesService ){}

  showImages() {
    this.imagesService.getImages();
  }

  getImagenes():string[]{
    return this.imagesService.misImagenes();
  }
}
