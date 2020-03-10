import * as types from './actionTypes';



export const harvester = (count) => {
    return {
      type: types.harvester,
      payload: {
        count
      },
    };
  };