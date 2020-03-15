import * as types from './actionTypes'

export const incrementmoney = (sum) =>{
    return {
        type: types.incrementmoney,
        payload:{
            sum
        }
    }
}

export const discrementmoney = (sum) =>{
    return {
        type: types.discrementmoney,
        payload: {
            sum
        }
    }
}

