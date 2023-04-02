import { createSelector } from "@ngrx/store";
import { IAppStateInstance } from "src/app/app-module-instance";

export const selectFeature = (state: IAppStateInstance) => state.people;

export const isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const errorSelector = createSelector(selectFeature, (state) => state.error);
export const peopleSelector = createSelector(selectFeature, (state) => state.people);
export const selectedPersonSelector = createSelector(selectFeature, (state) => state.selectedPerson);

