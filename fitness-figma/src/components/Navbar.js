import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';
import Backgroundlogo from '../assets/images/Backgroundlogo.png'

const Navbar = () => (
  
  <Stack direction="row" className="navbar" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
      <div className='navbar-logo'>
      <a href='#'><img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px',textDecoration:'none'}} /></a>
      <a href="#" className='tracking-wider' style={{fontWeight: '600',fontSize: '32px',textDecoration: 'none',fontFamily: 'Alegreya',color: 'white'}}>Fitness</a>
      <a href="/"className='tracking-wider' style={{fontWeight: '900',fontSize: '32px',textDecoration: 'none',fontFamily: 'Alegreya',color: '#FF2625'}}>Figma</a>
      
      </div>
    <Stack
      direction="row"
      gap="30px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" className='navbar-hover' style={{ textDecoration: 'none', color: 'white',borderBottom: '3px solid #FF2625'  }}>Home</Link>        
      <a href="#about" className='navbar-hover' style={{ textDecoration: 'none', color: 'white' }}>About Us</a>
      <a href="#exercises" className='navbar-hover' style={{ textDecoration: 'none', color: 'white' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;