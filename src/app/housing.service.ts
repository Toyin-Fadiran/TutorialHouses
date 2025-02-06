import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
//pass around our HouslingLocation array using the two helpful methods/functions
export class HousingService {

  //fields
  private readonly baseUrl: string = 'https://angular.dev/assets/images/tutorials/common';

  private url: string = 'http://localhost:3000/locations';

  constructor() { }

  //field: array of housingLocations
 



  //functions 
  // getAllHousingLocations(): HousingLocation[] {
  //   return this.housingLocationList;
  // }

  async getAllHousingLocations(): Promise<HousingLocation[]> {

    const data = await fetch(this.url);
    return (await data.json()) ?? [];

  }

  //methodName          //param.          //return Type
  // getHousingLocationById(id: number): HousingLocation | undefined {
  //   return this.housingLocationList.find( (housingLocation) => housingLocation.id === id);

  // }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }


}
