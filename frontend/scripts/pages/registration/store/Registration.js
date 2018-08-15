import { observable, action } from 'mobx';
import axios from 'axios';

class Registration {
  @observable status;

  @observable error;

  @action resetError = () => {
    this.error = undefined;
  };

  @action fetchData = ({ email, login, password }) => {
    axios.post('http://localhost:8892/api/users', { email, login, password })
      .then((res) => {
        localStorage.token = res.data;
        this.status = 'success';
      })
      .catch((err) => {
        if (err.response === undefined) {
          this.error = 'Ошибка соединения с сервером. Повторите запрос позже';
        }
      });
  }
}

export default new Registration();
