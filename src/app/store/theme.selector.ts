import { ActionReducerMap, createSelector } from "@ngrx/store";
import { IAppStateInstance } from "../app-module-instance";
import { IThemeState } from "./theme.reducers";
import * as fromLayout from './theme.reducers'


  
export const selectFeature = (state: IAppStateInstance) => state.layout;
export const themeSelector = createSelector(selectFeature, (state) => state.theme);
// export const themeSelector = createSelector(layout, (state) => state.theme);