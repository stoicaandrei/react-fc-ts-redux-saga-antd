import { StoreState } from '../root/reducers';

export const all = (state: StoreState) => state.patients.items;
export const incoming = (state: StoreState) =>
  state.patients.items.filter(el => el.type === 'incoming');
export const queued = (state: StoreState) =>
  state.patients.items.filter(el => el.type === 'queued');
export const active = (state: StoreState) =>
  state.patients.items.filter(el => el.type === 'active');
export const error = (state: StoreState) => state.patients.error;
export const waiting = (state: StoreState) => state.patients.waiting;
