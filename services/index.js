import React, {createContext, useContext} from 'react';

const serviceContext = createContext({});
const {Provider} = serviceContext;

const ServiceProvider = ({children, services}) => {
  return <Provider value={services}>{children}</Provider>;
};

const useServices = () => useContext(serviceContext);

export {ServiceProvider, useServices};
