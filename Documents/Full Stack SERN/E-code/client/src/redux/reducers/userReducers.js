import {STUDENT_LOGIN, TRAINER_LOGIN,LOGOUT} from '../constants/actionTypes'

export default (state = { authData: null }, action) => {
    switch (action.type) {
        
            case STUDENT_LOGIN:
                localStorage.setItem('user', JSON.stringify({ ...action?.payload.result[0], occ : 'student'}));
                return action.payload;

            case TRAINER_LOGIN:
                localStorage.setItem('user', JSON.stringify({ ...action?.payload.result[0], occ : 'trainer'}));
                return action.payload;
                
            case LOGOUT:
            localStorage.removeItem('user');
            return { ...state, authData: null, loading: false, errors: null };
                       
        default: // need this for default case
        return state 
    }
}