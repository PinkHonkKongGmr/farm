import initialState from '../initialState'
import * as types from './actionTypes'

const mapReducer  = (state = initialState.dragged, action) =>{
    switch(action.type){
        case types.addChicken:
            let newValueChic = state.chickens
            newValueChic++
            const incrementChick = {chickens:newValueChic}
            return { ...state, ...incrementChick }    

        case types.addCow:
            let newValueCow = state.cow
            newValueCow++
            const incrementCow = {cow:newValueCow}
            return { ...state, ...incrementCow }   
            
        case types.addRye:
            let newValueRye = state.rye
            newValueRye++
            const incrementRye = {rye:newValueRye}
            return { ...state, ...incrementRye } 


        case types.removeChicken:
            let newValueChic2 = state.chickens
            newValueChic2--
            const incrementChick2 = {chickens:newValueChic2}
            return { ...state, ...incrementChick2 }    
    
        case types.removeCow:
            let newValueCow2 = state.cow
            newValueCow2--
            const incrementCow2 = {cow:newValueCow2}
            return { ...state, ...incrementCow2 }   
                
         case types.removeRye:
            let newValueRye2 = state.rye
            newValueRye2--
            const incrementRye2 = {rye:newValueRye2}
            return { ...state, ...incrementRye2 } 
 
        default:
            return state
    }
}

export default mapReducer;