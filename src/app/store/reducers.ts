import * as fromActions from './actions';
import { AppTheme } from './AppTheme';

export interface State {
    theme: AppTheme;
}

const initialState: State = {
    theme: { class: 'pink-theme', name: 'pink theme' }
};


export function reducer(state = initialState, action: fromActions.AppActions): State {
    switch (action.type) {
        case fromActions.AppActionTypes.SetTheme:
            return { ...state, theme: action.payload };
        default:
            return state;
    }
}