import initialState from '../initialState'
import * as types from './actionTypes'


const mapReducer  = (state = initialState.resurses, action) =>{
    switch(action.type){
    
        case types.incrementmoney:
            let money = state.money
            money = money + action.payload.sum
            const incrementmoney = {money}
            return {state, ...incrementmoney}

        case types.discrementmoney:
            let money2 = state.money
            money2 = money2 - action.payload.sum
            const discrementmoney = {money:money2}
            return {state, ...discrementmoney}    
            

        default:
            return state
    }
}

export default mapReducer;