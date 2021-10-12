import React from 'react';
import IndexHead from '../src/components/commons/Head';
import '../src/components/patterns/FormPost/style/instagram.min.css';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <IndexHead />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}
