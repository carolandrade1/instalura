/* eslint-disable react/prop-types */
import React from 'react';
import ProfileScreen from '../../src/components/screens/app/ProfileScreen';
import websiteUserPageHOC from '../../src/components/wrappers/WebsiteUserPage/hoc';
import { authService } from '../../src/services/auth/authService';
import { userService } from '../../src/services/user/userService';

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);
  const hasActiveSession = await auth.hasActiveSession();

  if (hasActiveSession) {
    const session = await auth.getSession();
    const profilePage = await userService.getProfilePage(ctx);
    const infoGithub = await userService.getGithubInfo(session.username);

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

function ProfilePage() {
  return (
    <ProfileScreen />
  );
}

export default websiteUserPageHOC(ProfilePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Profile',
    },
    pageBoxProps: {
      backgroundColor: '#F2F2F2',
    },
  },
});
