import * as types from './actionTypes';

  
export const setCurrentId = drugId => {
    return {
      type: types.setCurrentId,
      payload: {
        drugId
      },
    };
  };

  export const setPosition = pos => {
    const position = Object.assign({},pos)
    return {
      type: types.setPosition,
      payload:{
        position
      }
    };
  };
