import { browserHistory } from 'react-router';
import axios from 'axios';

export function allStories() {
  return function (dispatch) {
    let url = '/getstories';
    let token = localStorage.getItem('token');
    if (token) {
      return axios({
        url: url,
        timeout: 20000,
        method: 'get',
        responseType: 'json',
        headers: {
          Authorization: 'JWT ' + token,
        },
      }).then(function (response) {
        dispatch({
          type: 'FETCH_ALL_USERS',
          payload: response.data
        })
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
}

export function createStory(story) {
  return function (dispatch) {
    let url = '/auth/createstory';
    let token = localStorage.getItem('token');
    if (token) {
      return axios({
        url: url,
        timeout: 20000,
        method: 'post',
        data: story,
        responseType: 'json',
        headers: {
          Authorization: 'JWT ' + token,
        },
      }).then(function (response) {
        alert('Story Created');
      }).catch(function (error) {
        alert('Story Not Created');
      });
    }
  }
}
