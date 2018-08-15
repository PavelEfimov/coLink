import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/form';
import { Button } from 'components/controls';

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className="registration-form">
    <Input label="E-mail" name="email" placeholder="email" />
    <Input label="Логин" name="login" placeholder="login" />
    <Input label="Пароль" name="password" placeholder="password" type="password" />
    <Input label="Подтвердите пароль" name="repeat" placeholder="repeat" type="password" />
    <button className="form__button">
          Регистрация
    </button>
    <Button path="/Login" text="Войти" />
  </form>
);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
