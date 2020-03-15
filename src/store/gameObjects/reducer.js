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

        case types.addCell:
                return { ...state, ...action.payload } 
                
        case types.removeCell:
                return { ...state, ...action.payload }    

        case types.cellToRemoveOn:
                return { ...state, ...action.payload }  
                
        case types.cellToRemoveOff:
                return { ...state, ...action.payload } 
        
        case types.noCellsToAdd:
                return { ...state, ...action.payload } 
                       
            
        default:
            return state
    }
}

export default mapReducer;