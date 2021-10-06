import React from 'react';
import { render } from '../../../infra/test/testUtils';

import AboutScreen from './index';
import { WebsitePageContextProvider } from '../../wrappers/WebsitePage/context';

describe('<AboutScreen />', () => {
  const expectedTitle = 'title';
  const expectedDescription = 'description';

  const contextValues = {
    messages: { pageSobre: { pageTitle: expectedTitle, pageDescription: expectedDescription } },
  };

  const AboutScreenWithPageProvider = (
    <WebsitePageContextProvider value={contextValues}>
      <AboutScreen />
    </WebsitePageContextProvider>
  );

  test('renders title and description', () => {
    const { getByRole, getByText } = render(AboutScreenWithPageProvider);

    const title = getByRole('heading');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(expectedTitle);

    const description = getByText(expectedDescription);
    expect(description).toBeInTheDocument();
  });
});
