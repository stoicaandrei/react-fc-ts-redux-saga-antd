/**
 * The root saga file that defines the root saga.
 */

import { all } from 'redux-saga/effects';

/* Import module sagas */
import patients from '../patients/sagas';
import pet from '../pet/sagas';

/** The root saga that starts all of the other sagas. */
export default function* rootSaga() {
  yield all([patients(), pet()]);
}
