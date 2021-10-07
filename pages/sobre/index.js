import React from 'react';
import AboutScreen, { getContent } from '../../src/components/screens/AboutScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

export async function getStaticProps({ preview }) {
  const messages = await getContent({ preview });

  return {
    props: {
      contextValues: {
        messages,
      },
    },
  };
}

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
