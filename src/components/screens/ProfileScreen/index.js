/* eslint-disable react/prop-types */
import React from 'react';
import Text from '../../foundation/Text';
import { usePageContext } from '../../wrappers/WebsitePage/context';
import InfoContainer, {
  Container, FotosContainer, ImageContainer, ListContainer, User,
} from './style';

export default function ProfileScreen() {
  const { posts, infoGithub } = usePageContext();
  const qntPosts = posts.length;

  const Info = [
    {
      number: `${qntPosts}`,
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
    <Container>
      <InfoContainer>
        <ImageContainer>
          <img src={infoGithub.avatar} alt="Imagem do perfil" />
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
            <li key={item.createdAt}>
              <img src={item.photoUrl} alt={item.description} />
            </li>
          ))}
        </ul>
      </FotosContainer>
    </Container>
  );
}
