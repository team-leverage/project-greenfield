import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const {
    label, id, placeHolder = '', value, handleInputChange,
  } = props;
  return (
    <label htmlFor={id}>
      {label}
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        placeholder={placeHolder}
        onChange={handleInputChange}
      />
    </label>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default TextInput;
