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

    return {
      type: types.setCell,
      payload:{
        cell
      }
    };
  };

  export const addCell = () => {
    return {
      type: types.addCell,
      payload: {
        cellToAdd: true
      },
    };
  };

  export const noCellsToAdd = () => {
    return {
      type: types.noCellsToAdd,
      payload: {
        cellToAdd: false
      },
    };
  };

  export const removeCell = (ind) => {
    return {
      type: types.removeCell,
      payload: {
        cellToRemoveInd: ind
      },
    };
  };

  export const cellToRemoveOn = () => {
    return {
      type: types.removeDrag,
      payload: {
        cellToRemove: true
      },
    };
  };

  export const cellToRemoveOff = () => {
    return {
      type: types.removeDrag,
      payload: {
        cellToRemove: false,
        cellToRemoveInd: null
      },
    };
  };