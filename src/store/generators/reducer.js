import initialState from '../initialState'
import * as types from './actionTypes'


const mapReducer  = (state = initialState.generators, action) =>{
    switch(action.type){
        case types.harvester:
            let harvest = state.food
            harvest = harvest + action.payload.count
            const incrementHarvest = {food:harvest}
            return { ...state, ...incrementHarvest }    

        case types.feed:
            let food = state.food
            food--
            const dincrementHarvest = {food}
            return { ...state, ...dincrementHarvest } 

        case types.putEggs:
            let putEgg = state.eggs
            putEgg = putEgg + action.payload.count
            const incremenEgg= {eggs:putEgg}
            return { ...state, ...incremenEgg } 

        case types.milkCow:
            let milk = state.milk
            milk = milk + action.payload.count
            const incrementMilk = {milk}
            return { ...state, ...incrementMilk } 

         case types.resetEggs:
            const nullEgg= {eggs:0}
            return { ...state, ...nullEgg } 
    
        case types.resetMilk:
            const nullMilk = {milk:0}
            return { ...state, ...nullMilk } 

        default:
            return state
    }
}

export default mapReducer;