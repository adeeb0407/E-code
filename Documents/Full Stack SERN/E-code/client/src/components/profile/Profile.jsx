import React, {useEffect, useState} from 'react';
import './profile.css'
import {useSelector, useDispatch} from 'react-redux'
import {login, loginTrainer} from '../../redux/actions/userActions'
import {useLocation, useNavigate} from 'react-router-dom'
import { Navigate  } from 'react-router-dom'

function Profile() {
    
    const user = useSelector((state) => state.userDetails)
    const [userLocal, setUserLocal] = useState(JSON.parse(localStorage.getItem('user')))
    const dispatch = useDispatch()
    const naviagte = useNavigate()
    console.log(user.authData);


    // useEffect(() => {
    //     dispatch(login(userLocal.contact))
    // }, []);
    

    console.log(user?.result[0]);
    console.log(user?.occ);
    if(user.authData === null){
        return(
            <>
            halooos
                <Navigate replace  to='/course'/>
            </>
        )
    }else if(user?.occ === 'student'){
        return( 
            <div className='profile'> 
             {user?.result?.map((dataItem) => 
              <figure class="snip0057 red hover">
            <figcaption>
              <h2>{dataItem.fullname} <span>{dataItem.location}</span></h2>
              <p>Age : {dataItem.age} years old and Contact : {dataItem.contact}</p>
              <div class="icons"><a href="#"><i class="ion-ios-home"></i></a><a href="#"><i class="ion-ios-email"></i></a><a href="#"><i class="ion-ios-telephone"></i></a></div>
            </figcaption>
            <div class="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample4.jpg" alt="sample4"/></div>
            <div class="position">{user?.occ.toUpperCase()}</div>
          </figure>
             )
             }
            </div>
            );
    }else if (user?.occ === 'trainer'){
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
  <div class="position">{user?.occ.toUpperCase()}</div>
</figure>
                )}

       </div>)
    }else{
        return(
            <>
                <Navigate replace  to='/course'/>
            </>
        )
    }
 
}

export default Profile;
