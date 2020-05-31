import { takeEvery, call, put } from 'redux-saga/effects';

import { createApiCaller } from 'services';

import * as actions from './actions';

const Api = createApiCaller('pet');

function* handleFindPets(action: actions.FindPetsAction) {
  try {
    console.log(action.payload);

    const result = yield call(() =>
      Api<actions.FindPetsPayload>({
        path: '/findByStatus',
        data: { status: 'available' },
      })
    );

    yield put(actions.findPets.done({ params: action.payload, result }));
  } catch (error) {
    yield put(actions.findPets.failed({ params: action.payload, error }));
  }
}

export default function* saga() {
  yield takeEvery(actions.findPets.started, handleFindPets);
}
