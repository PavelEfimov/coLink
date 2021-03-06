import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

import FormGroup from './FormGroup';

const ControlInput = ({ input: { input, meta }, label, type }) => (
  <FormGroup label={label} error={meta.error} touched={meta.touched} value={input.value}>
    <Input
      {...input}
      className={input.value === ''
        ? 'form-input'
        : `${meta.error === undefined ? 'form-input form-input_not-empty' : ' form-input form-input_error'}`}
      type={type}
    />
  </FormGroup>
);

ControlInput.propTypes = {
  input: PropTypes.objectOf(
    PropTypes.shape({
      meta: PropTypes.object,
      input: PropTypes.object,
    }),
  ),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default ControlInput;
