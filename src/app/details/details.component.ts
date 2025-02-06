import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { DatabaseService } from '../database.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {

  //field was to inject the Route
  route: ActivatedRoute = inject(ActivatedRoute);

  //field to inject Housing service
  housingService = inject(HousingService);


  //field to inject Database Service
  databaseService = inject(DatabaseService);


  //field that represents the HousingLocation OBJECT (undefined or Housing Location Datatype-- in case no House exists)
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  //special method when detailsComponent Class being created
  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    
    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation;
    });
  }
  //method/functions
  submitApplication() {
    this.databaseService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }


}
