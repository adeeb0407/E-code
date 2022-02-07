import {COURSE_FETCH_ALL, COURSE_BY_ID} from '../constants/actionTypes'

export default (course = null, action) => {
    switch (action.type) {
        
            case COURSE_FETCH_ALL:
                return action.payload;

            case COURSE_BY_ID:
                return action.payload;
              
        default: // need this for default case
        return course 
    }
}