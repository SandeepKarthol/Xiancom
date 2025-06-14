/**
@copyright : ToXSL Technologies Pvt. Ltd. 
@author    : Shiv Charan Panjeta 

All Rights Reserved.
Proprietary and confidential :  All information contained here in is, and remains
the property of ToXSL Technologies Pvt. Ltd. and it's partners.
Unauthorized copying of this file, via any medium is strictly prohibited. */

import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import { navigate } from '../../../Core/Components/NavigationRef';
import NotificationComp from '../../Components/NotificationComp';
import { PROJECTNAME, getUserAgent } from '../../Value/AppConst';
import URL from '../Globals/Config';
import {
  Success,
  USER_NOT_AUTHENTICATED,
  fourHundredError,
  fourHundredThreeError,
  fourHundredoneError,
  serverErrorCode,
} from '../Globals/ServerResponse';
import * as session from './session';

const handleNotification = (type, message, description = null) => {
  NotificationComp({
    type,
    message,
    description,
  });
};

const handleError = async error => {
  if (error.response) {
    const {status, data} = error.response;
    

    if (data.message == USER_NOT_AUTHENTICATED) {
      await session.clearSession();
      navigate('Login');
      return false;
    }

    switch (status) {
      case fourHundredoneError:
        handleNotification('danger', 'Session Expire');
        await session.clearSession();
        await AsyncStorage.clear();
        navigate('Login');
        break;
      case fourHundredThreeError:
        handleNotification('danger', PROJECTNAME, data.message);
        await session.clearSession();
        await AsyncStorage.clear();
        // checkToken();
        navigate('Login');
        break;
      case fourHundredError:
        handleNotification('danger', PROJECTNAME, data.message);
        break;
      case fourHundredThreeError:
        handleNotification('danger', PROJECTNAME, data.message);
        break;
      case serverErrorCode:
        handleNotification('danger', 'Server Error', data.message);
        break;

      default:
        handleNotification('danger', PROJECTNAME, data.message);
    }
  }
  return Promise.reject(error);
};

const setupInterceptors = axiosInstance => {
  axiosInstance.interceptors.request.use(
    async config => {
      NetInfo.fetch().then(state => {
        if (state.isConnected != true) {
          NotificationComp({
            type: 'danger',
            message: PROJECTNAME,
            description: 'No Internet Connection',
          });
        }
      });
      const token = await session.getToken();
      console.log('token', token);
      const userAgent = getUserAgent();
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
          'User-Agent': userAgent,
        };
      }
      return config;
    },
    error => Promise.reject(error),
  );
  axiosInstance.interceptors.response.use(async function (response) {
    if (response?.status === Success) {
      await AsyncStorage.setItem('TokenExpire', 'false');
    }
    return response;
  }, handleError);
};

export const http = axios.create({
  baseURL: URL,
  headers: {'Content-Type': 'application/json'},
});

export const httpMultipart = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

setupInterceptors(http);
setupInterceptors(httpMultipart);
