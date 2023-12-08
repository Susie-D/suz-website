import { React, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReorderOutlined } from '@mui/icons-material';
import './Navbar.scss';

export default function Navbar() {
  const [expandNavbar, setExpandNavBar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavBar(false);
  }, [location]);

  return (
    <>
      <nav className="navbar" id={expandNavbar ? 'open' : 'close'}>
        <div className="toggleButton">
          <button onClick={() => setExpandNavBar((prev) => !prev)}>
            <ReorderOutlined />
          </button>
        </div>
        <div className="links">
          <Link to={'/home'}>Home</Link>
          <Link to={'/projects'}>Projects</Link>
          <Link to={'/experience'}>Experience</Link>
        </div>
      </nav>
    </>
  );
}
