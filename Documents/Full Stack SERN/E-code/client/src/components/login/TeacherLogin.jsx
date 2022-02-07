import React, {useState} from 'react';
import Input from '@mui/material/Input';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useDispatch} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import {loginTrainer} from '../../redux/actions/userActions'

function TeacherLogin({openTeacher, setOpenTeacher, handleClickOpenTeacher, handleCloseTeacher}) {

  const [contact, setcontact] = useState('')
  const [fullname, setFullName] = useState('')
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const [userLocal, setUserLocal] = useState(JSON.parse(localStorage.getItem('trainer')))

  const handelTrainerLogin = () => {
    if(contact.trim() === ''){

    }else{
      dispatch(loginTrainer(contact, fullname.toLocaleLowerCase(), navigate))
      setOpenTeacher(false)
      setUserLocal(JSON.parse(localStorage.getItem("trainer")));
    }
  }
  
  return( <div>
  <Dialog open={openTeacher} onClose={handleCloseTeacher}>
    <DialogTitle>Teacher Login</DialogTitle>
    <DialogContent >
      <DialogContentText style = {{marginBottom : '20px'}}>
        Enter the Full Name and Contact Number to Login into your Teachers Panel
      </DialogContentText>
      <Input
      style = {{padding : '10px'}}
        autoFocus
        placeholder='Full Name'
        margin="dense"
        id="name"
        label="Full Name"
        type="text"
        fullWidth
        variant="standard"
        onChange = {(e) => setFullName(e.target.value)}
      />
      <Input
      style = {{padding : '10px'}}
      placeholder='Number'
        autoFocus
        margin="dense"
        id="name"
        label="Contact Number"
        type="number"
        fullWidth
        variant="standard"
        onChange = {(e) => setcontact(e.target.value)}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleCloseTeacher}>Cancel</Button>
      <Button onClick={handelTrainerLogin}>Login</Button>
    </DialogActions>
  </Dialog>
  </div>
  )
}

export default TeacherLogin;
