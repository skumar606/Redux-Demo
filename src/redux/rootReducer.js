import { combineReducers } from 'redux'

import cakeReducer from './cake/cakeReducer'
import { userReducer } from './user/userReducer'

export const rootReducer = combineReducers({
    cake: cakeReducer,
    users: userReducer
})