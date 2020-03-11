import * as types from './actionTypes';



export const harvester = (count) => {
    return {
      type: types.harvester,
      payload: {
        count
      },
    };
  };

  export const putEggs = (count) => {
    return {
      type: types.putEggs,
      payload: {
        count
      },
    };
  };

  export const milkCow = (count) => {
    return {
      type: types.milkCow,
      payload: {
        count
      },
    };
  };
