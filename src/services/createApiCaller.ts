import queryString from 'query-string';

import { API_URL } from 'appConstants';

type apiParams<Payload> = {
  path: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: Payload;
  auth?: boolean;
};

export default function (endpoint: string) {
  const baseUrl = `${API_URL}/${endpoint}`;

  return async function <Payload>({
    path,
    method = 'GET',
    data,
    auth = true,
  }: apiParams<Payload>): Promise<any> {
    const query = '?' + queryString.stringify((data as any) || {});

    const url = `${baseUrl}${path}${method === 'GET' ? query : ''}`;

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    if (auth) {
      headers.append('Authorization', `JWT ${'token'}`);
    }

    const response = await fetch(url, {
      headers,
      method,
      body: method !== 'GET' ? JSON.stringify(data) : undefined,
    });

    return response.json();
  };
}
