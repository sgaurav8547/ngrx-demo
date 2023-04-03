// import { ActionReducer, Action } from '@ngrx/store';
// import { merge, pick } from 'lodash-es';

// function setSavedState(state: any, localStorageKey: string) {
//     localStorage.setItem(localStorageKey, JSON.stringify(state));
// }

// function getSavedState(localStorageKey: string): any {
//     let data: string | null = localStorage.getItem(localStorageKey);
//     data = !data ? "{}" : data;
//     return JSON.parse(data);
// }

// export function storageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
//     let onInit = true;
//     return function (state, action) {
//         const nextState = reducer(state, action);
//         if (onInit) {
//             onInit = false;
//             const savedState = getSavedState('appState');
//             return merge(nextState, savedState);
//         }
//         const stateToSave = pick(nextState, ['people']);
//         setSavedState(stateToSave, 'appState');

//         return nextState;
//     }
// }


import {ActionReducer, Action} from '@ngrx/store';
import {merge, pick} from 'lodash-es';
import {LocalStorageService} from './service/local-storage.service';

export function storageMetaReducer<S, A extends Action = Action>(saveKeys: string[], localStorageKey: string, storageService: LocalStorageService) {
  let onInit = true; // after load/refresh…
  return function(reducer: ActionReducer<S, A>) {
    return function(state: S, action: A): S {
      // get to the nextState.
      const nextState = reducer(state, action);
      // init the application state.
      if (onInit) {
        onInit           = false;
        const savedState = storageService.getSavedState(localStorageKey);
        return merge(nextState, savedState);
      }

      // save the next state to the application storage.
      const stateToSave = pick(nextState, saveKeys);
      storageService.setSavedState(stateToSave, localStorageKey);

      return nextState;
    };
  };
}
