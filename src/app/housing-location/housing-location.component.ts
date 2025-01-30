import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule, RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {

  //field or property
  @Input() childHousingLocation!: HousingLocation;

  //method or functions
  //HousingLocation.nameOfFunction()

}
