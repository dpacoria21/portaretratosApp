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
    this.imagesService.getImages()
    .subscribe( (resp) => {
      for(let i =0; i<resp.images.length; i++){
        this.myImage[i] = resp.images[i].resourceURL;
      }
    });
    return this.myImage;
  }
}
