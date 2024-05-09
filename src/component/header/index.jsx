import React from 'react'
import { AppBar, Toolbar, Typography, Button} from '@mui/material';
import {  useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'


const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        // nav bar for signout and login 
<AppBar position="fixed" sx={{backgroundColor:"#03265B"}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         Clone My Trips
        </Typography>
        {userLoggedIn ? (
          <Button
            color="inherit"
            onClick={() => { doSignOut().then(() => { navigate('/') }) }}
          >
            Logout
          </Button>
        ) : (
          <>
            <Button color="inherit" onClick = {() =>{navigate('/')}} to="/">
              Login
            </Button>
           
          </>
        )}
      </Toolbar>
    </AppBar>
        
    )
}

export default Header