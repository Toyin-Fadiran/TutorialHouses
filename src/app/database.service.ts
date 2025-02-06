import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  //fields

  //special method that creates the service
  constructor() { }

  //methods
  //methodName          //method parameters)
  submitApplication(firstName: string, lastName: string, email: string) {
    //placeholder for actual DB implementation
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
