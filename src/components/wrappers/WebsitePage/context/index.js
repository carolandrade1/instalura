/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';

const WebsitePageContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const WebsitePageContextProvider = ({ value, children }) => (
  <WebsitePageContext.Provider value={value}>{children}</WebsitePageContext.Provider>
);

export const usePageContext = () => {
  const context = useContext(WebsitePageContext);

  if (!context) throw new Error("You cant't use WebsitePageContext outside its Provider");

  return context;
};
