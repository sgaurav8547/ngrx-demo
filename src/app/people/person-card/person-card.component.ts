import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppStateInstance } from 'src/app/app-module-instance';
import { IPerson } from '../person';
import { selectedPersonSelector } from '../store/selector';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent {
  selectedPerson$:Observable<IPerson | null> = this.store.pipe(select(selectedPersonSelector));
  constructor(private store: Store<IAppStateInstance>) {}
}
