import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar, Text} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello, React Native!</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
}
