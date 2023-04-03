import * as fromActions from './theme.actions';
import { IAppTheme } from './AppTheme';
import { Action, ActionReducerMap, createReducer, on } from '@ngrx/store';

export interface IThemeState {
    theme: IAppTheme;
}

export const initialState: IThemeState = {
    theme: { class: 'pink-theme', name: 'pink theme' }
};

export const rootReducers = createReducer(initialState, on(fromActions.rootActions, (state, action) => ({ ...state, theme: action.layout })))
function reducer(state: IThemeState | undefined, action: Action): IThemeState {
    return rootReducers(state, action);
}

export const reducers: ActionReducerMap<{ layout: IThemeState }> = {
    layout: reducer,
};