import { createAction, props } from "@ngrx/store";
import { IPerson } from "../person";

export const getPeople = createAction('[People] Get People');

export const getPeopleSuccess = createAction('[People] Get People Success',
    props<{ people: IPerson[] }>());

export const getPeopleFailure = createAction('[People] Get People Faliure',
    props<{ error: string }>());

export const selectPerson = createAction('[People] Select Person', props<{id: string}>());