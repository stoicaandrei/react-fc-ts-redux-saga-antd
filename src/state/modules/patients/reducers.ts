import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { produce } from 'immer';

/* Import our module files */
import * as actions from './actions';
import { Patient } from './types';

export type StoreState = {
  items: Patient[];
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
  },
);

/**
 * Reducer function for this module.
 */
export const reducer = reducerWithInitialState(initialState);

reducer.case(actions.requestPatients.done, (state, { result: patients }) =>
  produce(state, draft => {
    draft.items = patients;
    draft.waiting = false;
  }),
);

reducer.case(actions.addPatient.done, (state, { result: patient }) =>
  produce(state, draft => {
    draft.items.push(patient);
    draft.waiting = false;
  }),
);

reducer.case(actions.removePatient.done, (state, { params }) =>
  produce(state, draft => {
    draft.items = draft.items.filter((el) => el.id !== params.id);
    draft.waiting = false;
  }),
);

reducer.case(actions.updatePatient.done, (state, { params, result }) =>
  produce(state, draft => {
    draft.items = draft.items.filter((el) => el.id !== params.id);
    draft.items.push(result);
    draft.waiting = false;
  }),
);

// Generic started and failed reducer for every function
reducer.cases(
  [
    actions.requestPatients.started,
    actions.updatePatient.started,
    actions.removePatient.started,
    actions.addPatient.started,
  ],
  (state) =>
    produce(state, draft => {
      draft.waiting = true;
      draft.error = undefined;
    }),
);

reducer.cases(
  [
    actions.requestPatients.failed,
    actions.updatePatient.failed,
    actions.removePatient.failed,
    actions.addPatient.failed,
  ],
  (state, { error }) =>
    produce(state, draft => {
      draft.waiting = false;
      draft.error = { ...error, message: error.message || (error as any).status.toString() };
    }),
);
