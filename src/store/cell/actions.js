import * as types from './actionTypes';

export const addChick = newCount => {
    return {
      type: types.addChicken
    };
  };

  
export const addCow = newCount => {
    return {
      type: types.addCow,
      payload: {
        cows: newCount,
      },
    };
  };