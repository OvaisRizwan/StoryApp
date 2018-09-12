
import { browserHistory } from 'react-router';
import axios from 'axios';

export function handleLogin(login) {
  return function (dispatch) {
    let url = '/auth/login';
    return axios({
      url: url,
      method: 'POST',
      data: login,
    }).then(function (response) {
      localStorage.setItem('token', response.data.user.token);
      alert('Login Successful');
      browserHistory.push('/menu');
    }).catch(function (error) {
      alert('Login Failed');
    });
  }
}
