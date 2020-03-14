import * as types from './actionTypes';

  
export const setCurrentId = drugId => {
    return {
      type: types.setCurrentId,
      payload: {
        drugId
      },
    };
  };

  export const removeDrag = idToRemove => {
    return {
      type: types.removeDrag,
      payload: {
        idToRemove
      },
    };
  };

  export const setCell = cell => {
    // const position = Object.assign({},pos)
    return {
      type: types.setCell,
      payload:{
        cell
      }
    };
  };
