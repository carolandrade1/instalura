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
  return (props) => {
    const { contextValues, pageWrapperProps: pageWrapperPropsFromProps, ...rest } = props;
    return (
      <WebsiteGlobalProvider>
        <WebsiteUserPageWrapper
          {...pageWrapperProps}
          {...pageWrapperPropsFromProps}
          contextValues={contextValues}
        >
          <PageComponent {...rest} />
        </WebsiteUserPageWrapper>
      </WebsiteGlobalProvider>
    );
  };
}
