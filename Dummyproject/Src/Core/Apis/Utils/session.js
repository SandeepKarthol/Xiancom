/**
@copyright : ToXSL Technologies Pvt. Ltd. < www.toxsl.com >
@author    : Shiv Charan Panjeta < shiv@toxsl.com >

All Rights Reserved.
Proprietary and confidential :  All information contained here in is, and remains
the property of ToXSL Technologies Pvt. Ltd. and it's partners.
Unauthorized copying of this file, via any medium is strictly prohibited. */

import AsyncStorage from '@react-native-async-storage/async-storage';

const userKey = 'user';
const accessTokenKey = 'accessToken';
export const setSession = async (user, accessToken) => {
  await AsyncStorage.setItem(userKey, JSON.stringify(user));
  await AsyncStorage.setItem(accessTokenKey, accessToken);
};

export const getToken = async () => {
  let accessToken = await AsyncStorage.getItem(accessTokenKey);
  return accessToken;
};

export const clearSession = async () => {
  await AsyncStorage.removeItem(accessTokenKey);
  await AsyncStorage.removeItem(userKey);
};

export const checkSession = async () => {
  let accessToken = await AsyncStorage.getItem(accessTokenKey);
  return accessToken ? true : false;
};
