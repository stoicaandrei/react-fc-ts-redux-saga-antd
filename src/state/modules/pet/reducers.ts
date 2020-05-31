import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { produce } from 'immer';

import * as actions from './actions';
import { Pet } from './types';

export type StoreState = {
  items: Pet[];
  error?: Error;
  waiting: boolean;
};

/**
 * The initial store state for this module.
 */
const initialState: StoreState = produce(
  {
    items: [],
    waiting: false,
  },
  () => {
    /*empty*/
  }
);

/**
 * Reducer function for this module.
 */
export const reducer = reducerWithInitialState(initialState);

reducer.case(actions.findPets.done, (state, { result: pets }) =>
  produce(state, draft => {
    draft.items = pets;
    draft.waiting = false;
  })
);

// Generic started and failed reducer for every function
reducer.cases([actions.findPets.started], state =>
  produce(state, draft => {
    draft.waiting = true;
    draft.error = undefined;
  })
);

reducer.cases([actions.findPets.failed], (state, { error }) =>
  produce(state, draft => {
    draft.waiting = false;
    draft.error = error;
  })
);
