import React from 'react';
import styled from 'styled-components';
import Box from '../../src/components/foundation/Layout/Box';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

const Title = styled.h1`
  text-align: center;
`;

function AboutPage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
    >
      <Title>Sobre</Title>
    </Box>
  );
}

export default websitePageHOC(AboutPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
  },
});
