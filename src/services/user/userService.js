/* eslint-disable import/prefer-default-export */
import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { HttpClient } from '../../infra/http/HttpClient';
import { authService } from '../auth/authService';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master.omariosouto.vercel.app'
  : 'https://instalura-api.omariosouto.vercel.app';

export const userService = {
  async getProfilePage(ctx) {
    const url = `${BASE_URL}/api/users/posts`;
    try {
      const token = await authService(ctx).getToken();
      const response = await HttpClient(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return {
        user: {
          totalLikes: 100,
        },
        posts: response.data,
      };
    } catch (err) {
      throw new Error('Não conseguimos pegar os posts');
    }
  },
  async getGithubInfo(user) {
    const url = `https://api.github.com/users/${user}`;
    const infoGithub = await fetch(url)
      .then((response) => response.json())
      .then((res) => res)
      .catch((error) => error);

    if (infoGithub) {
      return {
        url: infoGithub.html_url ? infoGithub.html_url : 'https://github.com/',
        avatar: infoGithub.avatar_url ? infoGithub.avatar_url : '/images/spy.svg',
        name: infoGithub.name ? infoGithub.name : '',
        followers: infoGithub.followers ? infoGithub.followers : 0,
        following: infoGithub.following ? infoGithub.following : 0,
        username: infoGithub.login ? infoGithub.login : '',
        bio: infoGithub.bio ? infoGithub.bio : '',
      };
    }
    return infoGithub.message;
  },
};
