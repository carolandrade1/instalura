import React from 'react';
// import PropTypes from 'prop-types';
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
  return <AboutScreen />;
}

export default websitePageHOC(AboutPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
  },
});

// AboutPage.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   messages: PropTypes.object.isRequired,
// };
