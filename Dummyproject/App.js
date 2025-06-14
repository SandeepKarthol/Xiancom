import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import StackNavigation from './Src/StackNavigation';
import { Provider } from 'react-redux';
import { persistor, store } from './Src/Redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  
  useEffect(() => {
    // checkToken();
    setTimeout(() => {
      SplashScreen.hide();
    }, 5000);
  });

  return (
    <Provider store={store}>
        {/* Provide the Client to your App */}
        <PersistGate loading={null} persistor={persistor}>
          <StackNavigation />
          <FlashMessage position="top" />
        </PersistGate>
      </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
