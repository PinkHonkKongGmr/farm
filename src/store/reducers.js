import {combineReducers} from 'redux'
import cells from './cell/reducer'
import generators from './generators/reducer'

export default () =>
  combineReducers({
    cells,
    generators
  });


