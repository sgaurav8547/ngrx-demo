import { IPeopleStateInterface } from "./people/people-module-instance";
import { IThemeState } from "./store/theme.reducers";

export interface IAppStateInstance {
    people: IPeopleStateInterface;
    layout: IThemeState;
} 