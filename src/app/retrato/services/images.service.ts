import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RESTPhotos } from '../interfaces/images.interface';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private baseUrl: string = 'https://miutwo-api-production.up.railway.app/api';

  myImages: string[] = [];

  constructor( private http: HttpClient ) { }


  getImages(){
    this.http.get<RESTPhotos>(`${this.baseUrl}/images`)
      .subscribe( (resp) => {
        for(let i =0; i<resp.images.length; i++){
          this.myImages[i] = resp.images[i].resourceURL;
        }
      });
  }

  uploadImages(name:string, imagenes:File[]) {
    this.http.post(`${this.baseUrl}/images/upload`,{publisher:name, images: imagenes})
      .subscribe( resp =>{
        console.log(resp);
      });
  }

  misImagenes(): string[] {
    return this.myImages;  
  }

  

}
