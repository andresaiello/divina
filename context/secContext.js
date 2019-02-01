import React from 'react';

export const isAuthenticated = user => !!user;

export default React.createContext({
  user: null,
  updateUserState: () => { },
});
