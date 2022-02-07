import {TRAINER_FETCH_ALL} from '../constants/actionTypes'
import * as api from '../api/index'
import Swal from 'sweetalert2'
import {useLocation, useNavigate} from 'react-router-dom'

export const trainersFetchAll = () => async (dispatch) => {
  try {
    const {data} = await api.allTrainers()
    if(data.message === 'error'){
      Swal.fire(
        'Invalid Session',
        'Please Try Refrehsing the page!',
        'error'
      )
    }else{
    dispatch({
        type : TRAINER_FETCH_ALL,
        payload : data
    }) // dispatch is coming form redux-thunk also the aysn (dispatch)
    // window. location. reload()
  }
} catch (error) {
    console.log(error.message)
    }
  };
