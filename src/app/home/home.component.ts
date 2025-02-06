import { Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {
  //fields == properties
  readonly baseUrl: string = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList!: HousingLocation[];

  //field
  filteredLocationList: HousingLocation[] = [];

  //implicity dependency injection using the Constructor
  constructor(private housingService: HousingService) { }

  // housingLocationList: HousingLocation [] = this.housingService.getAllHousingLocations();

  // Data fetching in ngOnInit
  ngOnInit() {
   // this.housingLocationList = this.housingService.getAllHousingLocations();
   // this.filteredLocationList = this.housingLocationList;
   this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
    this.housingLocationList = housingLocationList;
    this.filteredLocationList = housingLocationList;
  });
  
  }


  //function
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }


}
