import { Action } from "@ngrx/store";
import { IPerson } from "../person";

export enum PeopleActionTypes {
    GetPeople = '[People] Get People',
    GetPeopleSuccess = '[People] Get People Success',
    GetPeopleFailure = '[People] Get People Failure',
    SelectPerson = '[People] Select Person'
}

export class GetPeople implements Action {
    readonly type = PeopleActionTypes.GetPeople;
    constructor() {}
}

export class GetPeopleSuccess implements Action {
    readonly type = PeopleActionTypes.GetPeopleSuccess;
    constructor(public people: IPerson[]) { }
}

export class GetPeopleFailure implements Action {
    readonly type = PeopleActionTypes.GetPeopleFailure;
    constructor(public error: string | null) { }
}

export class SelectPerson implements Action {
    readonly type = PeopleActionTypes.SelectPerson;
    constructor(public id: string) {}
}

export type PeopleActions = GetPeople | GetPeopleSuccess | GetPeopleFailure | SelectPerson