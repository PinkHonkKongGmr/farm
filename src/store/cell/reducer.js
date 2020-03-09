import initialState from '../initialState'
import * as types from './actionTypes'

const mapReducer  = (state = initialState.cells, action) =>{
    switch(action.type){
        case types.addChicken:
            let newValue = state.chickens
            newValue++
            const incrementChick = {chickens:newValue++}
            return { ...state, ...incrementChick }    

        case types.addCow:
            return { ...state, ...action.payload }      
        
        default:
            return state
    }
}

export default mapReducer;