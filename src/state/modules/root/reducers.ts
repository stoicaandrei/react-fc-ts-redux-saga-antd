import { combineReducers } from 'redux';

import * as patients from '../patients/reducers';
import * as pet from '../pet/reducers';

export type StoreState = {
  patients: patients.StoreState;
  pet: pet.StoreState;
};

const rootReducer = combineReducers({
  pet: pet.reducer,
});

export default rootReducer;
