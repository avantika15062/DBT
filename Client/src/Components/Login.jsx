import React from 'react'
import { Grid, Paper, TextField, Box, Typography, Button, Toolbar } from '@mui/material'
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';


export const Login = () => {
   const heading  = {fontSize: "2.5rem", fontWeight : "600" };
    const paperStyle = {padding : "2rem", margin : "100px auto", borderRadius : "1rem", boxShadow : "10px 10px 10px", backgroundColor:'orange'};
    const row = {display : "flex", marginTop : "2rem",backgroundColor:'white'}; 
    const btnStyle = {marginTop : "2rem", borderRadius : "0.5rem",backgroundColor : "blue", fontSize : "1.2rem", fontWeight : "700" }

const [email,setEmail] = useState()
const [password,setPassword] = useState();
  const navigate = useNavigate()
const handleLogin = (e)=>{
          e.preventDefault();
          axios.post("http://localhost:3001/login", {email,password}, {withCredentials : true}).then(result =>{
            if(result.data === "Success") {
               axios.get("http://localhost:3001/user", {withCredentials : true}).then(response => {
                if(response.data.user) {
                   localStorage.setItem("user", JSON.stringify(response.data.user)); // ✅ Store user
            navigate("/home"); 
                }
               })
            
            }
            else{
              alert("Login failed: User does not exist.") 
            }
    
          }).catch(err =>{
          console.log(err)
          })
        }
  return (
    <>
    <Toolbar/>
   <Grid align = "center">
  <Paper style={paperStyle} sx={{width : {
    xs : "80vw",
    sm : "50vw",
    md : "40vw",
    lg : "30vw",
    xl : "30vw",
  },
  height : '60vh',
  p:4}}>
    <Typography style={heading}>Login</Typography>
    <form onSubmit={handleLogin}>
        <Box>
        
        <TextField name='email'  onChange={(e)=>setEmail(e.target.value)}  style={row} sx={{label : {fontWeight : '700', fontSize : "1.3rem"}}} label = "Enter Email" fullWidth type='email' ></TextField>
        <TextField name='password' onChange={(e)=>setPassword(e.target.value)} style={row} sx={{label : {fontWeight : '700', fontSize : "1.3rem"}}}  label = "Enter Password" fullWidth type='password'></TextField>
        <Button type='submit'  variant='contained' style={btnStyle}>Login</Button>
        </Box>
      
    </form>

  </Paper>
   </Grid>
   </>
  )
}

