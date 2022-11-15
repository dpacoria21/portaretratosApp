import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-unique',
  templateUrl: './unique.component.html',
  styleUrls: ['./unique.component.css']
})
export class UniqueComponent {

  constructor( private imagesService: ImagesService ) { }

  publisher: string = '';
  file: File[] = [];


  enviar(){
    console.log(this.publisher);
    console.log(this.file);
    this.imagesService.uploadImages(this.publisher, this.file);
  }

  onFilechange(event: any) {
    console.log(event.target.files)
    this.file = event.target.files;
  }

  

}
