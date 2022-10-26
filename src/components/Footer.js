import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css";
import { Link } from '@mui/material';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Link href="https://www.instagram.com/shubham_2899" target="_blank">
          <InstagramIcon />
        </Link>
        <Link href="https://github.com/Shubham-2899" target="_blank">
          <GitHubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/shubhamlatake" target="_blank">
          <LinkedInIcon />
        </Link>
        <Link href="mailto:shubhamlatake123@gmail.com" target="_blank">
          <EmailIcon />
        </Link>
      </div>
      <p> &copy: 2022 shubhamlatake.com</p>
    </div>
  )
}

export default Footer