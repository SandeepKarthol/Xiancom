/**
@copyright : ToXSL Technologies Pvt. Ltd. < www.toxsl.com >
@author    : Shiv Charan Panjeta < shiv@toxsl.com >

All Rights Reserved.
Proprietary and confidential :  All information contained here in is, and remains
the property of ToXSL Technologies Pvt. Ltd. and it's partners.
Unauthorized copying of this file, via any medium is strictly prohibited. */

// AppConst Paths:

import moment from 'moment';
import 'moment-timezone';
import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  setCity,
  setLocationSearchfullAddress,
  setPostalCode,
  setStateProvinceCode,
  setcountryName,
  setlatitude,
  setlongitude,
} from '../../Redux/CommonStateSlice';

export default {
  // Platform Change in IOS and android

  resizeMode: Platform.OS == 'ios' ? 'contain' : 'center',
  resizeMode1: Platform.OS == 'ios' ? 'contain' : 'stretch',

  // TextInput Height and Width

  TextInputHeight: Platform.OS == 'ios' ? hp('5.5') : hp('5.5'),

  TextInputWidth: wp('90'),

  ZERO: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  Five: 5,

  //Fuel Type
  PETROL: 1,
  DIESEL: 2,
  CNG: 3,
  ELECTRIC: 4,

  // WorkStatus
  CANCELED: 0,
  PROGRESS: 2,
  COMPLETED: 1,
};

export const SuccessMsg = 'success';
export const DangerMsg = 'danger';
export const InfoMsg = 'info';

export const YES = 0;
export const NO = 1;

export const ZERO = 0;
export const ONE = 1;
export const TWO = 2;
export const THREE = 3;
export const FOUR = 4;
export const FIve = 5;
export const SIX = 6;
export const SEVEN = 7;
export const EIGHT = 8;
export const NINE = 9;
export const TEN = 10;

export const ScreenMoveSearch = 5;

export const ABOUTUS = 3;
export const TYPE_TERM_CONDITION = 1;
export const PRIVACY_POLICY = 2;
export const CANCEL_POLICY = 4;

export const PROJECTNAME = 'Keepsee';
export const NA = 'N/A';

export const getUserAgent = () => {
  const deviceName = DeviceInfo.getModel();
  const deviceVersion = DeviceInfo.getSystemVersion();
  const appVersion = DeviceInfo.getVersion();
  const deviceId = DeviceInfo.getDeviceId();
  const systemName = DeviceInfo.getSystemName();
  const platform = Platform.OS == 'android' ? 'android' : 'ios';

  return `${PROJECTNAME} /${appVersion} /(${deviceName} / ${deviceVersion}) /${platform}`;
};

export const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const convertUTCToLocal = date => {
  var utcCutoff = moment.utc(date, 'YYYYMMDD HH:mm:ss');
  var displayCutoff = utcCutoff.clone().tz(userTimeZone);
  return displayCutoff;
};

export const convertUTCToLocaltime = time => {
  var utcCutoff = moment.utc(time, 'HH:mm:ss');
  var displayCutoff = utcCutoff.clone().tz(userTimeZone);
  return displayCutoff;
};

export const localToUTC = localTime => {
  const localMoment = moment(localTime);
  const utcMoment = localMoment.utc();
  return utcMoment.format();
};

export const convertUTCToIST = utcTime => {
  return moment.utc(utcTime).tz(userTimeZone).format('hh:mm A');
};

export const getFileExtension = path => {
  return path.split('.').pop(); // Split the path by '.' and get the last part
};

export const AddressStateEmpty = dispatch => {
  dispatch(setLocationSearchfullAddress(''));
  dispatch(setCity(''));
  dispatch(setcountryName(''));
  dispatch(setPostalCode(''));
  dispatch(setlatitude(''));
  dispatch(setlongitude(''));
  dispatch(setStateProvinceCode(''));
};  

export const myList = [
  {id: 1, name: 'Mark Jacobs', description: 'Book Writer'},
  {id: 2, name: 'Mark Jacobs', description: 'Book Writer'},
  {id: 3, name: 'Mark Jacobs', description: 'Book Writer'},
];

