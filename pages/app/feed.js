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
    return {
      props: {
        user: {
          ...session,
          ...profilePage.user,
        },
        posts: profilePage.posts,
      },
    };
  }

  ctx.res.writeHead(307, { location: '/login' });
  ctx.res.end();

  return {
    props: {},
  };
}

function FeedPage(props) {
  return (
    <FeedScreen props={props} />
    // <pre>
    //   {JSON.stringify(props, null, 4)}
    // </pre>
  );
}

export default websiteUserPageHOC(FeedPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Feed',
    },
  },
});
