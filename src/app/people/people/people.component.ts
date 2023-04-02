import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppStateInstance } from 'src/app/app-module-instance';
import { IPerson } from '../person';
import * as PeopleActions from '../store/actions';
import { errorSelector, isLoadingSelector, peopleSelector, selectedPersonSelector } from '../store/selector';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.pipe(select(isLoadingSelector));
  error$: Observable<string | null> = this.store.pipe(select(errorSelector));
  people$: Observable<IPerson[]> = this.store.pipe(select(peopleSelector));

  constructor(private store: Store<IAppStateInstance>) {}
  ngOnInit(): void {
    this.store.dispatch(PeopleActions.getPeople());
  }

  selectPerson(id: string) {
    this.store.dispatch(PeopleActions.selectPerson({id}));
  }

}
