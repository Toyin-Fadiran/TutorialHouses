import {Component} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
//import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',  //externalizing the .html
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //field
  title = 'homes';
}
