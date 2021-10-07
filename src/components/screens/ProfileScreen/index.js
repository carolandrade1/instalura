/* eslint-disable react/prop-types */
import React from 'react';
import Box from '../../foundation/Layout/Box';
import Text from '../../foundation/Text';
import InfoContainer, {
  Container, FotosContainer, ImageContainer, ListContainer, User,
} from './style';

export default function ProfileScreen({ user, posts, infoGithub }) {
  const Info = [
    {
      number: `${posts.lenght}`,
      title: 'Publicaçoes',
    },
    {
      number: `${infoGithub.following}`,
      title: 'Seguindo',
    },
    {
      number: `${infoGithub.followers}`,
      title: 'Seguidores',
    },
  ];

  return (
    <Box
      marginTop={{
        xs: '48px',
        md: '97px',
      }}
      backgroundColor="#F2F2F2"
    >
      <Container>
        <InfoContainer>
          <ImageContainer>
            <img src={`https://github.com/${user.username}.png`} alt="" />
          </ImageContainer>
          <ListContainer>
            {Info.map((item) => (
              <li key={item.title}>
                <Text
                  tag="span"
                  variant="subTitle"
                  color="tertiary.main"
                >
                  {item.number}
                </Text>
                <Text
                  tag="p"
                  variant="paragraph1"
                  color="tertiary.light"
                >
                  {item.title}
                </Text>
              </li>
            ))}
          </ListContainer>
          <User>
            <Text
              tag="p"
              variant="subTitle"
              color="tertiary.main"
            >
              {infoGithub.name}
            </Text>
            <Text
              tag="p"
              variant="paragraph1"
              color="tertiary.light"
            >
              {infoGithub.bio}
            </Text>
          </User>
        </InfoContainer>
        <FotosContainer>
          <ul>
            {posts.map((item) => (
              <li key={item.id}>
                <img src={item.photoUrl} alt={item.description} />
              </li>
            ))}
          </ul>
        </FotosContainer>
      </Container>
    </Box>
  );
}
