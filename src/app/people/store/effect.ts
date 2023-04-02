import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { IPerson } from "../person";
import { PeopleService } from "../service/people.service";
import * as PeopleActions from './actions';

@Injectable()
export class PeopleEffects {
    constructor(private actions$: Actions, private service: PeopleService) { }
    getpeople$ = createEffect(() => this.actions$.pipe(ofType(PeopleActions.getPeople),
        mergeMap(() => {
            return this.service.people()
                .pipe(map((p: IPerson[]) => PeopleActions.getPeopleSuccess({people: p})),
                    catchError(error => of(PeopleActions.getPeopleFailure({error: error.message}))))
        })
    ));
} 