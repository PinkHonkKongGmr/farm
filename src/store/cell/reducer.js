import initialState from '../initialState'
import * as types from './actionTypes'

const mapReducer  = (state = initialState.cells, action) =>{
    switch(action.type){
        case types.addChicken:
            let newValueChic = state.chickens
            newValueChic++
            const incrementChick = {chickens:newValueChic}
            return { ...state, ...incrementChick }    

        case types.addCow:
            return { ...state, ...action.payload }  
            
        case types.addRye:
            let newValueRye = state.rye
            newValueRye++
            const incrementRye = {rye:newValueRye}
            return { ...state, ...incrementRye } 
 
        default:
            return state
    }
}

export default mapReducer;