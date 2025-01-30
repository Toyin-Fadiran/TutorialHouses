import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {

  //fields
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;
  
  //special method when detailsComponentClass being created
  constructor() {
      this.housingLocationId = Number(this.route.snapshot.params['id']);
  }
}
