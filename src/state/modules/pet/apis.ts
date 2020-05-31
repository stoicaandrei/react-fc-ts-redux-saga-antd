import { ApiConstructor } from 'services';

import * as actions from './actions';

const apiConstructor = new ApiConstructor({ name: 'pet' });

apiConstructor.createApi<actions.FindPetsPayload, actions.FindPetsResult>({
  path: '/findByStatus',
  action: actions.findPets,
});

export default apiConstructor;
