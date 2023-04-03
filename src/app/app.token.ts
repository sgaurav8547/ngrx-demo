import {InjectionToken} from '@angular/core';
import { StoreConfig } from '@ngrx/store';
import * as fromActions from './store/theme.actions'
import * as fromReducer from './store/theme.reducers';

// token for the state keys.
export const ROOT_STORAGE_KEYS = new InjectionToken<fromReducer.IThemeState[]>('StoreKeys');
// token for the localStorage key.
export const ROOT_LOCAL_STORAGE_KEY = new InjectionToken<string[]>('appStorage');


export const ROOT_CONFIG_TOKEN = new InjectionToken<StoreConfig<fromReducer.IThemeState, fromActions.AppActions>>('RootConfigToken');