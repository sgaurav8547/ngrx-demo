import { IPeopleStateInterface } from "../people-module-instance";
import { PeopleActions, PeopleActionTypes } from "./actions";

export const initialState: IPeopleStateInterface = {
    error: null,
    isLoading: false,
    people: [],
    selectedPerson: null
}

// export const reducers = createReducer(initialState,
//     on(PeopleActionTypes.getPeople, (state) => ({ ...state, isLoading: true })),
//     on(PeopleActions.getPeopleSuccess, (state, action) => ({
//         ...state,
//         isLoading: false,
//         people: action.people
//     })),
//     on(PeopleActions.getPeopleFailure, (state, action) => ({
//         ...state,
//         isLoading: false,
//         error: action.error
//     })),
//     on(PeopleActions.selectPerson, (state, action) => ({
//         ...state,
//         selectedPerson: state.people.find(p => p.id == action.id) || null
//     }))
// );

export function reducers(state = initialState, action: PeopleActions): IPeopleStateInterface {
    switch (action.type) {
        case PeopleActionTypes.GetPeople:
            return { ...state, isLoading: true };
        case PeopleActionTypes.GetPeopleSuccess:
            return {
                ...state,
                isLoading: false,
                people: action.people
            };
        case PeopleActionTypes.GetPeopleFailure:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case PeopleActionTypes.SelectPerson:
            return {
                ...state,
                selectedPerson: state.people.find(p => p.id == action.id) || null
            }
        default:
            return state;

    }
}