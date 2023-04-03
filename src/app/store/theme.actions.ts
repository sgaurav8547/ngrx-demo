import { Action, createAction, props } from '@ngrx/store';
import { IAppTheme } from './AppTheme';

export enum AppActionTypes {
    SetTheme = '[App] Set Theme'
}

export const rootActions = createAction(AppActionTypes.SetTheme, props<{layout: IAppTheme}>())
export class SetActiveTheme implements Action {
    readonly type = AppActionTypes.SetTheme;

    constructor(public theme: IAppTheme) { }
}

export type AppActions = SetActiveTheme;

export const APP_THEMES = [
    { class: 'pink-theme', name: 'pink theme' },
    { class: 'purple-theme', name: 'purple theme' },
    { class: 'dark-theme', name: 'dark theme' },
];