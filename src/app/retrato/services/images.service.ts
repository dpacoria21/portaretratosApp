import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RESTPhotos } from '../interfaces/images.interface';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private baseUrl: string = 'https://api.giphy.com/v1/gifs/search?api_key=MtQuaZGfd1UdsZHqwxwvkHPmbPZ8hhBB&q=Dragon Ball Z&limit=10';

  myImages: string[] = [];

  constructor( private http: HttpClient ) { }


  getImages():void {
    this.http.get<any>(`${this.baseUrl}`)
      .subscribe( (resp) => {
        console.log(resp);
      });
  }

}
