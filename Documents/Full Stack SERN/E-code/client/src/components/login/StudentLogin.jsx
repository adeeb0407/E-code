import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useDispatch} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import {login} from '../../redux/actions/userActions'


export default function StudentLogin({openStudent, setOpenStudent, handleClickOpenStudent, handleCloseStudent}) {
  
  const [contact, setContact] = React.useState('');
  const [userLocal, setUserLocal] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {

  }, [location])

  const handelStudentLogin = () => {
    if(contact.trim() === ''){

    }else{
      dispatch(login(contact, navigate))
      setOpenStudent(false)
      setUserLocal(JSON.parse(localStorage.getItem("user")));
    }
  }
  return (
    <div className = 'student-login'>
    <Dialog open={openStudent} onClose={handleCloseStudent}>
        <DialogTitle>Student Login</DialogTitle>
        <DialogContent>
          <DialogContentText >
            Enter the Contact Number to Login to your Student Account
          </DialogContentText>
          <Input
            autoFocus
            margin="dense"
            id="name"
            label="Contact Number"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => setContact(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseStudent}>Cancel</Button>
          <Button onClick={handelStudentLogin}>Login</Button>
        </DialogActions>
      </Dialog>
      </div>
  );
}
