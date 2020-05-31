import actionCreatorFactory, { Action } from 'typescript-fsa';

import { Pet, PetStatus } from './types';

const actionCreator = actionCreatorFactory('Pet');

export type FindPetsPayload = {
  status: PetStatus;
};
export type FindPetsAction = Action<FindPetsPayload>;
export const findPets = actionCreator.async<FindPetsPayload, Pet[], Error>(
  'FIND_PETS'
);
