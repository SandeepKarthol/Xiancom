/**
@copyright : ToXSL Technologies Pvt. Ltd. < www.toxsl.com >
@author    : Shiv Charan Panjeta < shiv@toxsl.com >

All Rights Reserved.
Proprietary and confidential :  All information contained here in is, and remains
the property of ToXSL Technologies Pvt. Ltd. and it's partners.
Unauthorized copying of this file, via any medium is strictly prohibited. */

import {Platform} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const NotificationComp = body => {
  showMessage({
    duration: body.duration ? body.duration : 2000,
    message: body.message ? body.message : '',
    description: body.description ? body.description : '',
    type: body.type,
    floating: true,
    style: {alignItems: 'flex-start'},
    position: {top: Platform.OS == 'ios' ? hp('5') : wp('9')},
  });
};

export default NotificationComp;
