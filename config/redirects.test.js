import redirects from './redirects';

describe('config/redirects', () => {
  test('renders all current redirects', () => {
    expect(redirects).toMatchSnapshot();
  });
});
