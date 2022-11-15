import { Component } from '@angular/core';
import { ImagesService } from './retrato/services/images.service';
import { RESTPhotos } from './retrato/interfaces/images.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portaretratoApp';
  
}
