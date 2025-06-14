import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Screen2 = () => {
  const navigation = useNavigation();

console.log('first')

  return (
    <View style={{flex:1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Screen1');
        }}>
        <Text>Screen2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
