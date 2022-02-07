import {COURSE_FETCH_ALL, COURSE_BY_ID} from '../constants/actionTypes'
import * as api from '../api/index'
import Swal from 'sweetalert2'
import {useLocation, useNavigate} from 'react-router-dom'

export const coursesFetchAll = () => async (dispatch) => {
  try {
    const {data} = await api.allCourses()
    if(data.message === 'error'){
      Swal.fire(
        'Invalid Session',
        'Please Try Refrehsing the page!',
        'error'
      )
    }else{
    dispatch({
        type : COURSE_FETCH_ALL,
        payload : data
    }) // dispatch is coming form redux-thunk also the aysn (dispatch)
    // window. location. reload()
  }
} catch (error) {
    console.log(error.message)
    }
  };

export const coursesFetchById = (id) => async (dispatch) => {
  try {
    const {data} = await api.courseById(id)
    if(data.message === 'error'){
      Swal.fire(
        'Invalid Session',
        'Please Try Refrehsing the page!',
        'error'
      )
    }else{
    dispatch({
        type : COURSE_BY_ID,
        payload : data
    }) // dispatch is coming form redux-thunk also the aysn (dispatch)
    // window. location. reload()
  }
} catch (error) {
    console.log(error.message)
    }
  };
