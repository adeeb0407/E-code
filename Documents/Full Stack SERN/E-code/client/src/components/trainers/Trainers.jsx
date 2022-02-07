import React, {useEffect, useState} from 'react';
import './trainer.css'
import {useSelector, useDispatch} from 'react-redux'
import {login, loginTrainer} from '../../redux/actions/userActions'
import {useLocation, useNavigate} from 'react-router-dom'
import { Navigate  } from 'react-router-dom'
import {trainersFetchAll} from '../../redux/actions/trainer'

function Profile() {
    
    
    const user = useSelector((state) => state.trainers)
    
    const [userLocal, setUserLocal] = useState(JSON.parse(localStorage.getItem('user')))
    const dispatch = useDispatch()
    const naviagte = useNavigate()
    
    useEffect(() => {

      dispatch(trainersFetchAll())

    },[])

    // useEffect(() => {
    //     dispatch(login(userLocal.contact))
    // }, []);
    

    console.log(user?.result);
    if(user === null){
        return(
            <>
            halooos
                <Navigate replace  to='/course'/>
            </>
        )
    }else{
        return(
            <div className='profile'> 
            {user?.result?.map((dataItem) =>
                <figure class="snip0057 blue">
  <figcaption>
    <h2>{dataItem.fullname} <span>{dataItem.country}</span></h2>
    <p>Trainer Contact : {dataItem.contact}. Trainer availability : {dataItem.avaliblity === true ? "Yes" : "No"}</p>
    <div class="icons"><a href="#"><i class="ion-ios-home"></i></a><a href="#"><i class="ion-ios-email"></i></a><a href="#"><i class="ion-ios-telephone"></i></a></div>
  </figcaption>
  <div class="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg" alt="sample3"/></div>
  <div class="position">TRAINER</div>
</figure>
                )}

       </div>)
    }
 
}

export default Profile;
