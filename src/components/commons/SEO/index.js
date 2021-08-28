import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

function SEO({ headTitle }) {
  const pageTitleDefault = 'Instalura - Projeto do Alura Bootcamp';
  const hasHeadTitle = Boolean(headTitle);
  const title = hasHeadTitle
    ? (`${headTitle} | ${pageTitleDefault}`)
    : (pageTitleDefault);
  const description = 'Site criado com React, Next/js e styled-components que está sendo desenvolvido durante o Bootcamp Front-End Avançado da Alura.';
  const url = 'https://instalura-cas.vercel.app/';
  const image = 'https://i.postimg.cc/XY8CsCyB/homepage-Desktop-1.png';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content="Carol Andrade Santos" />
      <meta name="keywords" content="Next.js, JAMStack, Alura, Instalura" />
      <meta httpEquiv="content-language" content="pt-BR" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};

export default SEO;
