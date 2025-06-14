/**
@copyright : ToXSL Technologies Pvt. Ltd. < www.toxsl.com >
@author    : Shiv Charan Panjeta < shiv@toxsl.com >

All Rights Reserved.
Proprietary and confidential :  All information contained here in is, and remains
the property of ToXSL Technologies Pvt. Ltd. and it's partners.
Unauthorized copying of this file, via any medium is strictly prohibited. */

import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Value/Colors';

// create a component
const ButtonComp = props => {
  const {
    onPress = () => {},
    title = '',
    style = {},
    leftImg = null,
    textStyle = {},
    isLoading = false,
    plus,
  } = props;

  return (
    <Pressable onPress={onPress} activeOpacity={0.7}>
      <LinearGradient
        colors={[Colors.buttonColor, Colors.DarkGrey]}
        style={{...styles.container, ...style}}>
        <Text style={{...styles.textStyle, ...textStyle}}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.buttonColor,
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: wp(90),
    paddingVertical: wp(5),
    marginVertical: wp(10),
    elevation: 2,
    alignSelf: 'center',
  },
  textStyle: {
    color: Colors.white,
    fontSize: wp(4.3),
    fontWeight: '500',
  },
  ImageFull: {
    height: wp(4),
    width: wp(4),
    right: wp(2),
  },
});

export default ButtonComp;
