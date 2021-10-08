/* eslint-disable react/prop-types */
import React from 'react';
import FeedScreen from '../../src/components/screens/FeedScreen';
import websiteUserPageHOC from '../../src/components/wrappers/WebsiteUserPage/hoc';
import { authService } from '../../src/services/auth/authService';
import { userService } from '../../src/services/user/userService';

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);
  const hasActiveSession = await auth.hasActiveSession();

  if (hasActiveSession) {
    const session = await auth.getSession();
    const profilePage = await userService.getProfilePage(ctx);

    const urlAPIGithub = `https://api.github.com/users/${session.username}`;
    const response = await fetch(urlAPIGithub);
    const infoGithub = await response.json();

    return {
      props: {
        contextValues: {
          user: {
            ...session,
            ...profilePage.user,
          },
          posts: profilePage.posts,
          infoGithub,
        },
      },
    };
  }

  ctx.res.writeHead(307, { location: '/login' });
  ctx.res.end();

  return {
    props: {},
  };
}

function FeedPage() {
  return (
    <FeedScreen />
  );
}

export default websiteUserPageHOC(FeedPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Feed',
    },
    pageBoxProps: {
      backgroundColor: '#F2F2F2',
    },
  },
});
