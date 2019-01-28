import React from 'react';

export const isAuthenticated = user => !!user;

export const SecContext = React.createContext({
  user: {},
  updateUserState: () => { },
});
