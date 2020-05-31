import { takeEvery, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import * as patients from './actions';
import { Patient } from './types';

function* handleAddPatient(action: patients.AddPatientAction): SagaIterator {
  try {
    /**
     * API CALL
     */

    const result: Patient = {
      id: Math.random(),
      name: action.payload.name,
      time: action.payload.time,
      type: 'queued',
    };

    // yield sleep(1000) as any;

    yield put(patients.addPatient.done({ params: action.payload, result }));
  } catch (error) {
    yield put(patients.addPatient.failed({ params: action.payload, error }));
  }
}

function* handleUpdatePatient(
  action: patients.UpdatePatientAction
): SagaIterator {
  try {
    /**
     * API CALL
     */

    const result = { ...action.payload.patient };
    result.type = action.payload.fields.type;

    yield put(patients.updatePatient.done({ params: action.payload, result }));
  } catch (error) {
    yield put(patients.updatePatient.failed({ params: action.payload, error }));
  }
}

function* handleRemovePatient(
  action: patients.RemovePatientAction
): SagaIterator {
  try {
    /**
     * API CALL
     */

    // yield sleep(1000) as any;

    yield put(
      patients.removePatient.done({ params: action.payload, result: {} })
    );
  } catch (error) {
    yield put(patients.removePatient.failed({ params: action.payload, error }));
  }
}

function* handleRequestPatients(
  action: patients.RequestPatientsAction
): SagaIterator {
  try {
    /**
     * API CALL
     */

    const result: Patient[] = [
      {
        id: 1,
        name: 'Andrei',
        time: 10,
        type: 'incoming',
      },
      {
        id: 2,
        name: 'Sergiu',
        time: 30,
        type: 'incoming',
      },
    ];

    // yield sleep(1000) as any;

    yield put(
      patients.requestPatients.done({ params: action.payload, result })
    );
  } catch (error) {
    yield put(
      patients.requestPatients.failed({ params: action.payload, error })
    );
  }
}

export default function* saga(): SagaIterator {
  yield takeEvery(patients.addPatient.started, handleAddPatient);
  yield takeEvery(patients.updatePatient.started, handleUpdatePatient);
  yield takeEvery(patients.removePatient.started, handleRemovePatient);
  yield takeEvery(patients.requestPatients.started, handleRequestPatients);
}
