/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import WebsitePageWrapper from '..';
import WebsiteGlobalProvider from '../../provider';

export default function websitePageHOC(
  PageComponent,
  { pageWrapperProps } = { pageWrapperProps: {} },
) {
  return (props) => {
    // passa pro PageComponent as props que não sejam
    // contextValues ou pageWrapperProps
    // OBS: a renomeção para pageWrapperPropsFromProps foi só pra
    // evitar o conflito da variavel ja definida na linha 10
    const { contextValues, pageWrapperProps: pageWrapperPropsFromProps, ...rest } = props;
    return (
      <WebsiteGlobalProvider>
        <WebsitePageWrapper
          {...pageWrapperProps}
          {...pageWrapperPropsFromProps}
          contextValues={contextValues}
        >
          <PageComponent {...rest} />
        </WebsitePageWrapper>
      </WebsiteGlobalProvider>
    );
  };
}
