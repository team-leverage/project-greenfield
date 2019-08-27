import React from 'react';
import PT from 'prop-types';

const ExitButton = function ({ handleExit }) {
  return (
    <div
      onClick={handleExit}
      role="presentation"
      className="onHover-pointer"
    >
      <i className="material-icons">
        close
      </i>
    </div>
  );
};

ExitButton.propTypes = {
  handleExit: PT.func.isRequired,
};

export default ExitButton;