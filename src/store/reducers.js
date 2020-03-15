import {combineReducers} from 'redux'
import dragged from './dragged/reducer'
import generators from './generators/reducer'
import gameObjects from './gameObjects/reducer'
import trades from './trades/reducer'

export default () =>
  combineReducers({
    dragged,
    generators,
    gameObjects,
    trades
  });


