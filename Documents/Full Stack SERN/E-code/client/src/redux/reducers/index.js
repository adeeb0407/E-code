import { combineReducers } from 'redux'
import userDetails from './userReducers'
import courses from './course'
import trainers from './trainer'

export const rootReducer = combineReducers({
    userDetails, 
    courses,
    trainers,
}) // reduers in main index.js is coming form here