import React from 'react';
import {ServiceProvider} from './index';
import {Alert} from 'react-native';

const nativeServices = {alert: Alert};

const NativeServiceProvider = ({children}) => {
  return (
    <ServiceProvider services={nativeServices}>{children}</ServiceProvider>
  );
};

export {NativeServiceProvider};
