import { createReducer, on } from "@ngrx/store";
import { IPeopleStateInterface } from "../people-module-instance";
import * as PeopleActions from "./actions";

export const initialState: IPeopleStateInterface = {
    error: null,
    isLoading: false,
    people: [],
    selectedPerson: null
}

export const reducers = createReducer(initialState,
    on(PeopleActions.getPeople, (state) => ({ ...state, isLoading: true })),
    on(PeopleActions.getPeopleSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        people: action.people
    })),
    on(PeopleActions.getPeopleFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    })),
    on(PeopleActions.selectPerson, (state, action) => ({
        ...state,
        selectedPerson: state.people.find(p => p.id == action.id) || null
    }))
);