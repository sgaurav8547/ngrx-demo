import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { IPerson } from "../person";
import { PeopleService } from "../service/people.service";
import { GetPeopleFailure, GetPeopleSuccess, PeopleActionTypes } from "./actions";

@Injectable()
export class PeopleEffects {
    constructor(private actions$: Actions, private service: PeopleService) { }
    getpeople$ = createEffect(() => this.actions$.pipe(ofType(PeopleActionTypes.GetPeople                     ),
        mergeMap(() => {
            return this.service.people()
                .pipe(map((p: IPerson[]) => new GetPeopleSuccess(p)),
                    catchError(error => of(new GetPeopleFailure(error.message))))
        })
    ));
} 