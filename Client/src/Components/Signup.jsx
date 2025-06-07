import { Grid, Paper, TextField, Box, Typography, Button,Toolbar } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

export const Signup = () => {
    const heading  = {fontSize: "2.5rem", fontWeight : "600" };
    const paperStyle = {padding : "2rem", margin : "100px auto", borderRadius : "1rem", boxShadow : "10px 10px 10px", backgroundColor : 'orange'};
    const row = {display : "flex", marginTop : "2rem",backgroundColor:'white'}; 
    const btnStyle = {marginTop : "2rem", borderRadius : "0.5rem",backgroundColor : "blue", fontSize : "1.2rem", fontWeight : "700" }

    const [name,setName] = useState("");
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const navigate = useNavigate()


    const handleSignup = (e)=>{
      e.preventDefault();
      axios.post("http://localhost:3001/signup", {name,email,password}).then(result =>{
        if(result.status==200) {
          console.log("User created successfully");
          window.alert("Signup Sucessful! Book your trip Now")
          navigate("/login")
        }

      }).catch(err =>{
        if(err.response && err.response.status === 400) {
          window.alert("Email Already Exists")

        } else {
          console.log(err)
        }
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
    <Typography style={heading}>Signup</Typography>
    <form onSubmit={handleSignup}>
        <Box>
        <TextField name='name' onChange={(e)=>setName(e.target.value)} required style={row} sx={{label : {fontWeight : '700', fontSize : "1.3rem"}}}   label = "Enter Name"   fullWidth type='text'></TextField>
        <TextField name='email'  onChange={(e)=>setEmail(e.target.value)} required style={row} sx={{label : {fontWeight : '700', fontSize : "1.3rem"}}} label = "Enter Email" fullWidth type='email' ></TextField>
        <TextField name='password'  onChange={(e)=>setPassword(e.target.value)} required style={row} sx={{label : {fontWeight : '700', fontSize : "1.3rem"}}}  label = "Enter Password" fullWidth type='password'></TextField>
        <Button type='submit'  variant='contained' style={btnStyle}>Signup</Button>
        </Box>
      
    </form>

  </Paper>
   </Grid>
   </>
  )
}
