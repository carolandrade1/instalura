import React from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import PropTypes from 'prop-types';
import AboutScreen from '../../src/components/screens/AboutScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

export async function getStaticProps() {
  const TOKEN = process.env.DATO_CMS_TOKEN;
  const DatoCMSURL = 'https://graphql.datocms.com/';
  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  const query = gql`
    query {
      pageSobre {
        pageTitle
        pageDescription
      }
    }
  `;

  const messages = await client.request(query);

  return {
    props: {
      messages,
    },
  };
}

function AboutPage({ messages }) {
  return (
    <AboutScreen messages={messages} />
  );
}

export default websitePageHOC(AboutPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
  },
});

AboutPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object.isRequired,
};
