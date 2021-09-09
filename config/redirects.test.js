import redirects from './redirects';

describe('config/redirects', () => {
  test('renders all current redirects', () => {
    const redirectsAtuais = [
      {
        source: '/login/',
        destination: '/app/login/',
        permanent: true,
      },
    ];
    expect(redirects).toEqual(redirectsAtuais);
  });
});
