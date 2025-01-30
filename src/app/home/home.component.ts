import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  //fields == properties
  readonly baseUrl: string = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList!: HousingLocation[];

  //dependeny injection using the Constructor
  constructor(private housingService: HousingService) { }

  // housingLocationList: HousingLocation [] = this.housingService.getAllHousingLocations();

  // Data fetching in ngOnInit
  ngOnInit() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }


}
