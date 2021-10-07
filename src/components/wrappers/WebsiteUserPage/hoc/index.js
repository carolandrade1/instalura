/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import WebsiteUserPageWrapper from '..';
import WebsiteGlobalProvider from '../../provider';

export default function websiteUserPageHOC(
  PageComponent,
  { pageWrapperProps } = { pageWrapperProps: {} },
) {
  return (props) => (
    <WebsiteGlobalProvider>
      <WebsiteUserPageWrapper
        {...pageWrapperProps}
        {...props.pageWrapperProps}
      >
        <PageComponent {...props} />
      </WebsiteUserPageWrapper>
    </WebsiteGlobalProvider>
  );
}
