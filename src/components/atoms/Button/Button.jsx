import React, { Component } from 'react';
import Link from 'react-router-dom';
import PropTypes from 'prop-types';
import './Button.scss';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ children, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.inclues(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <>
      <Link to="/sign-up" className="btn-mobile">
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>{children}</button>
      </Link>
    </>
  );
};

export default Button;

Component.propTypes = {
  children: PropTypes.any,
  buttonStyle: PropTypes.string,
  buttonSize: PropTypes.string,
};
