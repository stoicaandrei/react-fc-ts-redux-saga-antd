import { AsyncActionCreators } from 'typescript-fsa';

export type API<Payload, Result, InS> = {
  path: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: Payload;
  auth?: boolean;
  action: AsyncActionCreators<Payload, Result, Error>;
  successReducer: (state: InS, result: Result, payload: Payload) => void;
};
