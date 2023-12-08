import React from 'react';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import './Home.scss';

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Susie</h2>
        <div className="prompt">
          <p>
            I am a frontend software engineer who enjoys utilizing my creativity and technology skills to build
            beautiful websites.
          </p>
          <LinkedIn />
          <Email />
          <GitHub />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Frontend</h2>
            <span>Javascript, Typescript, HTML/CSS, Sass</span>
          </li>
          <li className="item">
            <h2>Lanuages</h2>
            <span>Javascript, Typescript, HTML/CSS, Sass</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
