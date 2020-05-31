import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { findPets } from 'state';
import { available } from '../state/modules/pet/selectors';

const View: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(findPets.started({ status: 'available' }))}
      >
        press me
      </button>
    </div>
  );
};

export default View;
