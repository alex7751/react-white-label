import * as fromLayout from '../core/reducers/layout';
import { ReducersMapObject, combineReducers } from 'redux';

export interface State {
    layout: fromLayout.State;
}

const reducers: ReducersMapObject = {
    layout: fromLayout.reducer
};

export const reducer = combineReducers(reducers);
