import {TRAINER_FETCH_ALL} from '../constants/actionTypes'

export default (trainer = null, action) => {
    switch (action.type) {
        
            case TRAINER_FETCH_ALL:
                return action.payload;
              
        default: // need this for default case
        return trainer 
    }
}