import { createSelector } from "@ngrx/store";
import { IAppStateInstance } from "../app-module-instance";


  
export const selectFeature = (state: IAppStateInstance) => state.layout;
export const themeSelector = createSelector(selectFeature, (state) => state.theme);