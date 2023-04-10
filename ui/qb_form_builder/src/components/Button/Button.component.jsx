import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.scss';

//A global button component that can be used by other developers as well. It maintains the same style
//and behaviour (loading, disabled). It displays a loading spinner when clicked (until success of submission)

const Button = ({ onClick, label, isloading, disabled }) => {
  return (
    <button
      className={`global-btn  + ${disabled ? 'btn-disable' : ''}`}
      onClick={onClick}
    >
      {label}
      <span className="loading-indicator">
        {isloading ? <FontAwesomeIcon icon={faSpinner} spin /> : ''}
      </span>
    </button>
  );
};

export default Button;
