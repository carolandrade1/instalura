import React from 'react';
import AboutScreen from '../../src/components/screens/AboutScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function AboutPage() {
  return (
    <AboutScreen />
  );
}

export default websitePageHOC(AboutPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
  },
});
