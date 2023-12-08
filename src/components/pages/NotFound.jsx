import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h1>Not Found</h1>
      <p>
        Go to the Link <Link to="/">Homepage</Link>.
      </p>
    </>
  );
}
