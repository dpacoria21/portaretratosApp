import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  myImage: string[] = [];

  constructor( private imagesService: ImagesService ){
  }
  ngOnInit(): void {

    this.imagesService.getImages()
    .subscribe( (resp) => {
      for(let i =0; i<resp.images.length; i++){
        this.myImage[i] = resp.images[i].resourceURL;
      }
    },(error) => {
      console.log("Error!!!");
    });
    
  }

  getImagenes():string[]{
    return this.myImage
  }
}
