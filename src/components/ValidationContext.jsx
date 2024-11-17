import React, { createContext, useState } from 'react';

export const ValidationContext = createContext();

export const ValidationProvider = ({ children }) => {
  const emailRegex = /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

  const validateEmail = (email) => {
    if (!email || !emailRegex.test(email)) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  return (
    <ValidationContext.Provider value={{ validateEmail }}>
      {children}
    </ValidationContext.Provider>
  );
};