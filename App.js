import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createStore} from './store';
import {NativeServiceProvider} from './services/native';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const store = createStore();

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeServiceProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NativeServiceProvider>
      </NavigationContainer>
    </Provider>
  );
}
