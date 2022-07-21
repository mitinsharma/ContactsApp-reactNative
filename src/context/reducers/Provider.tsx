import React, { createContext, useReducer } from 'react';
import authInitialState from '../initialStates/authInitialState';
import contactInitialState from '../initialStates/contactsInitialState';
import auth from './auth';
import contacts from './contacts';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {

  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(contacts, contactInitialState);

  return <GlobalContext.Provider value={
    {authState, contactsState, authDispatch, contactsDispatch}
  }>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;