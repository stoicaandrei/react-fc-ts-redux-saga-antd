import { StoreState } from '../root/reducers';

export const available = (state: StoreState) =>
  state.pet.items.filter(pet => pet.status === 'available');
export const error = (state: StoreState) => state.pet.error;
export const waiting = (state: StoreState) => state.pet.waiting;
