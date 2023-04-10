import React from 'react';
import './ErrorAlert.scss';

//An error alert that can be used globally
const ErrorAlert = ({ errorText }) => {
  return (
    <div className="error">
      <p className="error-content">{errorText}</p>
    </div>
  );
};

export default ErrorAlert;
