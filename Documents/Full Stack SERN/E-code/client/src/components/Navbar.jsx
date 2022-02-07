import * as React from 'react';
import {useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ecode from '../images/ecode.png'
import {Link} from 'react-router-dom'
import StudentLogin from './login/StudentLogin'
import TeacherLogin from './login/TeacherLogin'
import {useNavigate, useLocation} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {login, loginTrainer} from '../redux/actions/userActions'

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const [userLocal, setUserLocal] = useState(JSON.parse(localStorage.getItem('user')))
  const user = useSelector((state) => state.userDetails)
  console.log(user.authData);


  //  useEffect(() => {
  //  dispatch(loginTrainer(userLocal.contact, userLocal.fullname)) || dispatch(login(userLocal.contact))
  //  }, [userLocal])

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

const handelLogout = () => {
  setUserLocal(null)
  dispatch({ type: "LOGOUT" });
  navigate('/course')
  setAnchorElUser(null);
}
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [openStudent, setOpenStudent] = React.useState(false);
  const [openTeacher, setOpenTeacher] = React.useState(false);

  const handleClickOpenStudent = () => {
    setOpenStudent(true);
  };
  const handleClickOpenTeacher = () => {
    setOpenTeacher(true);
  };

  const handleCloseStudent = () => {
    setOpenStudent(false);
  };
  const handleCloseTeacher = () => {
    setOpenTeacher(false);
  };

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            style = {{ color : 'white', textDecorationStyle : "none"}}
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
           <Link to= '/'>
            <img src = {ecode} height = '50px'/>
            </Link>
          </Typography>
       
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            <Link to= '/course'>
         <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Courses</Typography>
                </MenuItem>
                </Link>
            <Link to= '/trainer'>
         <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Trainer</Typography>
                </MenuItem>
                </Link>
            </Menu>
          </Box>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
          <Link to= '/'>
            <img src = {ecode} height = '50px'/>
            </Link>
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link to= '/'>
          <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
              </Link>
          <Link to= '/course'>
          <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Courses
              </Button>
              </Link>
          <Link to= '/trainer'>
          <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Teachers
              </Button>
              </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={userLocal?.fullname} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu 
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user.authData === null ?
              <div>
              <MenuItem onClick={handleCloseUserMenu, handleClickOpenStudent}>
                  <Typography textAlign="center" >Student Login</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu, handleClickOpenTeacher}>
                  <Typography textAlign="center" >Trainer Login</Typography>
                </MenuItem>
                </div> 
              :
                <div>
                <Link to = '/profile'>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" >Profile</Typography>
                </MenuItem>
                </Link>
          
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" >Account</Typography>
                </MenuItem>

                <MenuItem onClick={handelLogout}>
                  <Typography textAlign="center" >Logout</Typography>
                </MenuItem>
                </div>
                }

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    
    <StudentLogin 
    openStudent = {openStudent}
     setOpenStudent= {setOpenStudent}
     handleClickOpenStudent = {handleClickOpenStudent}
     handleCloseStudent = {handleCloseStudent}
       />

      <TeacherLogin 
        openTeacher ={openTeacher}
        setOpenTeacher = {setOpenTeacher}
        handleClickOpenTeacher = {handleClickOpenTeacher}
        handleCloseTeacher = {handleCloseTeacher}
      />

      </>
  );
};
export default ResponsiveAppBar;
