import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import nav from './nav'
import imagesReducer from '../base/reducers'
import videosReducer from '../search/reducers'

const appReducer = combineReducers({
  nav,
  form,
  imagesReducer,
  videosReducer
})

export default appReducer
