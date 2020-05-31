

export type API<Payload> = {
  path: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: Payload;
  auth?: boolean;

}
