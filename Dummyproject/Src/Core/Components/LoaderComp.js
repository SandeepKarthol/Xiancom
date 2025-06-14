import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../Value/Colors';

const LoaderComp = props => {
  const {whiteColorScreen} = props;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: whiteColorScreen && Colors.whiteColor,
        height: hp('100'),
        width: wp('100'),
        position: 'absolute',
        paddingBottom: hp('5'),
        justifyContent: 'center',
        zIndex: 100,
      }}>
      <ActivityIndicator size="large" color={Colors.buttonColor} />
    </View>
  );
};

export default LoaderComp;
