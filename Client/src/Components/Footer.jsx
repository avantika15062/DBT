import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../assets/dbt-logo.png'; 

export const Footer = () => {
  return (
    <Box style = {{height : '300px'}} sx={{ backgroundColor: '#f5f5f5', py: 4 }}>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between">
          
          {/* Logo + Description + Socials */}
          <Grid item xs={12} sm={6} md={4} style={{ paddingLeft: '20px' }} >
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <img
                src={logo} // 👈 Update path to match your file
                alt="DBT Logo"
                style={{ width: '150px',  marginBottom: '10px' }}
              />
            </Box>
            <Typography variant="body2" color="textsecondary" style={{ marginTop: '10px' }}>
             Adventure awaits,travel smarter, farther, and deeper with us !
            </Typography>
            <Box style={{ marginTop: '10px',display: 'flex', gap: '10px' }}>
              <IconButton href="https://youtube.com" target="_blank" aria-label="YouTube">
                <YouTubeIcon />
              </IconButton>
              <IconButton href="https://github.com" target="_blank" aria-label="GitHub">
                <GitHubIcon />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Discover */}
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6"  style={{ marginBottom: '15px' }}>Discover</Typography>
            <Link component={RouterLink} to="/home" underline="none" color="text.secondary" display="block"  style={{ marginBottom: '15px' }}>Home</Link>
            <Link component={RouterLink} to="/about" underline="none" color="text.secondary" display="block"  style={{ marginBottom: '15px' }}>About</Link>
            <Link component={RouterLink} to="/tours" underline="none" color="text.secondary" display="block">Tour</Link>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6"  style={{ marginBottom: '15px' }} >Quick Links</Typography>
            <Link component={RouterLink} to="/gallery" underline="none" color="text.secondary" display="block"  style={{ marginBottom: '15px' }} >Gallery </Link>
            <Link component={RouterLink} to="/login" underline="none" color="text.secondary" display="block"  style={{ marginBottom: '15px' }} >Login</Link>
            <Link component={RouterLink} to="/signup" underline="none" color="text.secondary" display="block"  style={{ marginBottom: '15px' }} >Register</Link>
            <Link component={RouterLink} to="/privacy-policy" underline="none" color="text.secondary" display="block"  style={{ marginBottom: '15px' }} >Privacy Policy</Link>
            <Link component={RouterLink} to="/terms-and-conditions" underline="none" color="text.secondary" display="block">Terms & Conditions</Link>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6"  style={{ marginBottom: '15px' }} >Contact</Typography>
            <Box display="flex" alignItems="center" mt={1}  style={{ marginBottom: '15px' }} >
              <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">Mumbai, India</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}  style={{ marginBottom: '15px' }} >
              <EmailIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">support@dbtravels.com</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">+91 9876543210</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            © 2025 DBT Group of Travel Company — All Rights Reserved.
          </Typography>
          <Link href="#" underline="hover" mx={1}>Privacy Policy</Link>|
          <Link href="#" underline="hover" mx={1}>Terms & Conditions</Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;