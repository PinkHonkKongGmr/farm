import initialState from '../initialState'
import * as types from './actionTypes'
import { putEggs } from './actions'

const mapReducer  = (state = initialState.generators, action) =>{
    switch(action.type){
        case types.harvester:
            let harvest = state.food
            harvest = harvest + action.payload.count
            const incrementHarvest = {food:harvest}
            return { ...state, ...incrementHarvest }    

        case types.putEggs:
            let putEgg = state.food
            putEgg = putEgg + action.payload.count
            const incremenEgg= {eggs:putEggs}
            return { ...state, ...incremenEgg } 

        case types.milkCow:
            let milk = state.food
            milk = milk + action.payload.count
            const incrementMilk = {milk}
            return { ...state, ...incrementMilk } 

        default:
            return state
    }
}

export default mapReducer;