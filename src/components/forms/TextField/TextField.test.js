import React from 'react';
import { render, screen } from '@testing-library/react';

import TextField from './index';
import WebSiteGlobalProvider from '../../wrappers/WebsitePage/provider';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <WebSiteGlobalProvider>
        <TextField placeholder="Nome" value="ju" onChange={() => { }} name="nome" />
      </WebSiteGlobalProvider>,
    );

    const textField = screen.getByPlaceholderText(/nome/i);
    expect(textField).toMatchSnapshot();
  });
});
