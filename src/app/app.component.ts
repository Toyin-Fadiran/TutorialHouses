import {Component} from '@angular/core';
import { HomeComponent } from './home/home.component';
//import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.component.html',  //externalizing the .html
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //field
  title = 'homes';
}
