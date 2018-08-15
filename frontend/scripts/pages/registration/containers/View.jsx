import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form } from 'components/form';
import FormComponent from 'registration/components/Form';
import validation from 'registration/utils/Validation';

@inject(['registration'])
@observer
class RegistrationView extends Component {
  submitForm = (values) => {
    const { registration: { fetchData } } = this.props;
    fetchData(values);
  };

  resetError = () => {
    const { registration: { resetError } } = this.props;
    resetError();
  };

  render() {
    const { registration: { status, error } } = this.props;
    const { submitForm, resetError } = this;
    return (status === 'success' || localStorage.token !== undefined) ? <Redirect to="/Album" />
      : (
        <div className="registration">
          <Form
            onSubmit={submitForm}
            component={FormComponent}
            validate={validation}
          />
          <div className={error === undefined ? 'registration-error' : 'registration-error registration-error_active'}>
            { error }
            <button onClick={resetError} className="registration-error__button">
              Понятно
            </button>
          </div>
        </div>
      );
  }
}

RegistrationView.propTypes = {
  registration: PropTypes.objectOf(
    PropTypes.shape({
      fetchData: PropTypes.func.isRequired,
      status: PropTypes.string.isRequired,
      error: PropTypes.string,
      resetError: PropTypes.func,
    }),
  ),
};

export default RegistrationView;
