/* eslint-disable import/prefer-default-export */
import React from 'react';

export const WebsitePageContext = React.createContext({
  toggleModalCadastro: () => {},
  getCMSContent: (cmsKey) => cmsKey,
});
