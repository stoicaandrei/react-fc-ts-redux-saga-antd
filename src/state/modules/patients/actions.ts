import actionCreatorFactory, { Action } from 'typescript-fsa';

import { Patient, patientTypes } from './types';

const actionCreator = actionCreatorFactory('Patients');

export type RequestPatientsSuccessPayload = Patient[];
export type RequestPatientsAction = Action<undefined>;
export const requestPatients = actionCreator.async<
  undefined,
  RequestPatientsSuccessPayload,
  Error
>('REQUEST_Patients');

export type AddPatientPayload = {
  name: string;
  time: number;
};
export type AddPatientAction = Action<AddPatientPayload>;
export const addPatient = actionCreator.async<
  AddPatientPayload,
  Patient,
  Error
>('ADD_Patient');

export type RemovePatientPayload = {
  id: number;
};
export type RemovePatientAction = Action<RemovePatientPayload>;
export const removePatient = actionCreator.async<
  RemovePatientPayload,
  unknown,
  Error
>('REMOVE_Patient');

export type UpdatePatientPayload = {
  id: number;
  fields: {
    type: patientTypes;
  };
  patient: Patient;
};
export type UpdatePatientAction = Action<UpdatePatientPayload>;
export const updatePatient = actionCreator.async<
  UpdatePatientPayload,
  Patient,
  Error
>('UPDATE_Patient');
