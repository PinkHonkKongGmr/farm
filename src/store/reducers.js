import {combineReducers} from 'redux'
import cells from './cell/reducer'

export default () =>
  combineReducers({
    cells,
  });


