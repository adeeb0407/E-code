import {CONSTANT_TEMPLATE, TRAINER_LOGIN,STUDENT_LOGIN} from '../constants/actionTypes'
import * as api from '../api/index'
import Swal from 'sweetalert2'
import {useLocation, useNavigate} from 'react-router-dom'

export const reduxActionTemplate = (value) => {
    return {type  : CONSTANT_TEMPLATE,
    payload : value};
}

export const login = (contact, navigate) => async (dispatch) => {
  try {
    const {data} = await api.loginStudent(contact)
    if(data.message === 'error'){
      Swal.fire(
        'Invalid User',
        'Please Check your Contact Details!',
        'error'
      )
    }else{
    localStorage.setItem('user', data)
    console.log(data);
    dispatch({
        type : STUDENT_LOGIN,
        payload : data
    }) // dispatch is coming form redux-thunk also the aysn (dispatch)
    // window. location. reload()
    navigate('/profile')
  }
} catch (error) {
    console.log(error.message)
    }
  };
export const loginTrainer = (contact, fullname, navigate) => async (dispatch) => {
    
  try {
    const {data} = await api.loginTrainer(contact, fullname)
    if(data.message === 'error'){
      Swal.fire(
        'Invalid User',
        'Please Check your Contact Details and Full Name!',
        'error'
      )
    }else{
        localStorage.setItem('user', data)
        dispatch({
        type : TRAINER_LOGIN,
        payload : data
    }) // dispatch is coming form redux-thunk also the aysn (dispatch)
    // window. location. reload()
    navigate('/profile')
  }
} catch (error) {
    console.log(error.message)
    }
  };