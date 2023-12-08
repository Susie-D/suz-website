import React from 'react';
import './Footer.scss';
import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHub />
        <LinkedIn />
        <Twitter />
        <Instagram />
      </div>
      <p>&copy; 2023 suztech.com</p>
    </div>
  );
}
