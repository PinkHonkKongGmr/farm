import {combineReducers} from 'redux'
import dragged from './dragged/reducer'
import generators from './generators/reducer'
import gameObjects from './gameObjects/reducer'

export default () =>
  combineReducers({
    dragged,
    generators,
    gameObjects
  });


