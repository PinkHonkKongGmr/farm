import initialState from '../initialState'
import * as types from './actionTypes'

const mapReducer  = (state = initialState.generators, action) =>{
    switch(action.type){
        case types.harvester:
            let harvest = state.food
            harvest = harvest + action.payload.count
            const incrementHarvest = {food:harvest}
            return { ...state, ...incrementHarvest }    
        default:
            return state
    }
}

export default mapReducer;