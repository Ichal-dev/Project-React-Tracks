import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from '../context/createDataContext';
import trackerApi from '../api/tracker';
import * as RootNavigation from '../RootNavigation';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'singin':
      return {errorMessage: '', token: action.payload};
    case 'clear_error_message':
      return {...state, errorMessage: ''};
    case 'singout':
      return {token: null, errorMessage: ''};
    default:
      return state;
  }
};

const tryLocalSingin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    dispatch({type: 'singin', payload: token});
    RootNavigation.navigate('MainApp', {screen: 'TrackList'});
  } else {
    RootNavigation.navigate('Auth', {screen: 'Singup'});
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({type: 'clear_error_message'});
};

const singup =
  dispatch =>
  async ({email, password}) => {
    try {
      const response = await trackerApi.post('/singup', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'singin', payload: response.data.token});

      RootNavigation.navigate('MainApp', {screen: 'TrackList'});
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up',
      });
    }
  };

const singin =
  dispatch =>
  async ({email, password}) => {
    try {
      const response = await trackerApi.post('/singin', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'singin', payload: response.data.token});

      RootNavigation.navigate('MainApp', {screen: 'TrackList'});
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sing in',
      });
    }
  };

const singout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({type: 'singout'});
  RootNavigation.navigate('Auth', {screen: 'Singup'});
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {singin, singout, singup, clearErrorMessage, tryLocalSingin},
  {token: null, errorMessage: ''},
);
