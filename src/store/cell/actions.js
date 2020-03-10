import * as types from './actionTypes';

export const addChick = ()=> {
    return {
      type: types.addChicken
    };
  };

  export const addRye = () => {
    return {
      type: types.addRye
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
