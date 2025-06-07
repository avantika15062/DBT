import React from 'react'
import {AppBar, Toolbar, Typography, Button} from "@mui/material"
import { Link } from 'react-router-dom'
import { Logout } from './Logout';
import logo from '../assets/dbt-logo.png'; 

export const Navbar = () => {
    const button = {marginRight : '20px',fontSize : "1.2rem", fontWeight : '700', padding : '0.3rem 1.4rem', backgroundColor: 'orange', fontWeight : "700",marginTop : "2rem", borderRadius : "0.5rem"}
  return (
   <>
   <AppBar >
    <Toolbar style={{height:'130px', backgroundColor:'#f5f5f5'}}>
        <Typography  variant = "h4" sx={{flexGrow : 1}}>
             <img
                src={logo} // 👈 Update path to match your file
                alt="DBT Logo"
                style={{ width: '150px',  marginBottom: '10px' }}
              />
        </Typography>
        <Button style = {button}  variant = "contained" to = "/login" component ={Link}>Login</Button>
        <Button  style = {button}  variant = "contained" to = '/signup' component = {Link}>Register</Button>
        <Logout/>
       
    </Toolbar>
   </AppBar>
   </>
  )
}
