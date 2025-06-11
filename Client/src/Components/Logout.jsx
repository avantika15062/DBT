import React from 'react'
import { Button } from '@mui/material'

export const Logout = () => {
    const button = {marginRight : '20px',fontSize : "1.2rem",  padding : '0.3rem 1.4rem', backgroundColor: 'orange', fontWeight : "700",marginTop : "2rem", borderRadius : "0.5rem"}
  return (
   <Button variant="contained" color='error'  style = {button}>LogOut</Button>
  )
}
