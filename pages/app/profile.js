/* eslint-disable react/prop-types */
import React from 'react';
import ProfileScreen from '../../src/components/screens/ProfileScreen';
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

function ProfilePage({ user, posts }) {
  // NUMEROS SEGUIDORES-SEGUINDO
  const [infoGithub, setInfoGithub] = React.useState([]);

  React.useEffect(() => {
    const githubAPI = `https://api.github.com/users/${user.username}`;
    fetch(githubAPI)
      .then((resposta) => resposta.json())
      .then((respostaJson) => setInfoGithub(respostaJson));
  }, []);

  return (
    <>
      <ProfileScreen user={user} posts={posts} infoGithub={infoGithub} />
    </>
  );
}

export default websiteUserPageHOC(ProfilePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Profile',
    },
  },
});
