import initialState from '../initialState'
import * as types from './actionTypes'

const mapReducer  = (state = initialState.gameObjects, action) =>{
    
    switch(action.type){
 
        case types.setCurrentId:
            return { ...state, ...action.payload }

        case types.removeDrag:
            return { ...state, ...action.payload }    

        case types.setCell:
                return { ...state, ...action.payload } 

            
        default:
            return state
    }
}

export default mapReducer;