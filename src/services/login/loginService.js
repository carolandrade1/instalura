import { setCookie, destroyCookie } from 'nookies';

import { isStagingEnv } from '../../infra/env/isStagingEnv';

/* eslint-disable import/prefer-default-export */
async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }

      throw new Error('Falha em pegar os dados do servidor :(');
    });
}

const BASE_URL = isStagingEnv
  // Back End de DEV
  ? 'https://instalura-api-git-master.omariosouto.vercel.app'
  // Back End de PROD
  : 'https://instalura-api-git-master.omariosouto.vercel.app';
  // : 'https://instalura-api.omariosouto.vercel.app';

export const loginService = {
  async login(
    { username, password },
    setCookieModule = setCookie,
    HttpClientModule = HttpClient,
  ) {
    return HttpClientModule(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username,
        password,
      },
    })
      .then((respostaConvertida) => {
        const { token } = respostaConvertida.data;
        const hasToken = token;
        if (!hasToken) {
          throw new Error('Failed to login');
        }
        const DAY_IN_SECONDS = 86400;

        setCookieModule(null, 'APP_TOKEN', token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7,
        });

        return { token };
      });
  },
  async logout(destroyCookieModule = destroyCookie) {
    destroyCookieModule(null, 'APP_TOKEN');
  },
};
