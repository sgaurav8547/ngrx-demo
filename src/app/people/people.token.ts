import {InjectionToken} from '@angular/core';
import * as fromActions from './store/actions';
import { StoreConfig } from '@ngrx/store';
import { IPeopleStateInterface } from './people-module-instance';

export const PEOPLE_STORAGE_KEYS = new InjectionToken<keyof IPeopleStateInterface[]>('PeopleStorageKeys');
export const PEOPLE_LOCAL_STORAGE_KEY = new InjectionToken<string[]>('PeopleStorage');
export const PEOPLE_CONFIG_TOKEN = new InjectionToken<StoreConfig<IPeopleStateInterface, fromActions.PeopleActions>>('PeopleConfigToken');