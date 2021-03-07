import React, {createContext, useContext} from 'react';
import {Alert} from 'react-native';

const nativeContext = createContext({});
const {Provider} = nativeContext;

const defaultServices = {alert: Alert};

const NativeProvider = ({children, services = defaultServices}) => {
  return <Provider value={services}>{children}</Provider>;
};

const useNative = () => {
  const services = useContext(nativeContext);
  return services;
};

export {NativeProvider, useNative};
