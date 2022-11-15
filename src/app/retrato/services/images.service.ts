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
    return this.http.get<RESTPhotos>(`${this.baseUrl}/images`);
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
