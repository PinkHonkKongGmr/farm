import * as types from './actionTypes';



export const harvester = (count) => {
    return {
      type: types.harvester,
      payload: {
        count
      },
    };
  };

  export const feed = () => {
    return {
      type: types.feed
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

  export const resetEggs = () => {
    return {
      type: types.resetEggs
    };
  };

  export const resetMilk = () => {
    return {
      type: types.resetMilk
    };
  };

