import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Screen2')
      }}>
      <Text>Screen1</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
