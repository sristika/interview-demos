import React from 'react';
import BuilderMultipleChoice from '../BuilderMultipleChoice/BuilderMultipleChoice.component';
import './Builder.scss';

// A builder container that might be used to call a variety of field builders

const Builder = () => {
  return (
    <div className="builder-container">
      <div className="builder-header">
        <span>Field builder</span>
      </div>
      <BuilderMultipleChoice />
    </div>
  );
};

export default Builder;
