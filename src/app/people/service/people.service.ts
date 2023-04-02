import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { IPerson } from '../person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  people =() => {
    return of(<IPerson[]>[
      { id: "1", firstName: "Brett", lastName: "Lee" },      
      { id: "2", firstName: "Joe", lastName: "Simpson" },
      { id: "3", firstName: "Patrik", lastName: "Drum" },
    ]).pipe(delay(2000));
  }
}
