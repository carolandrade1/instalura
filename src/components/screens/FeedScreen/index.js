/* eslint-disable react/prop-types */
import React from 'react';
import { usePageContext } from '../../wrappers/WebsitePage/context';
import Text from '../../foundation/Text';
import Box from '../../foundation/Layout/Box';
import Container, {
  ActionContainer, Header, InfoContainer, PhotoContainer, PostsContainer, ProjetosContainer,
} from './style';

const friends = [
  {
    name: 'Mayra',
    avatar: 'https://avatars.githubusercontent.com/u/68648498?v=4',
    login: 'mayrazan',
    url: 'https://github.com/mayrazan',
  },
  {
    name: 'Eduardo Tioma',
    avatar: 'https://avatars.githubusercontent.com/u/32800546?v=4',
    login: 'edukure',
    url: 'https://github.com/edukure',
  },
  {
    name: 'Ana Paula Dezuo',
    avatar: 'https://avatars.githubusercontent.com/u/43011663?v=4',
    login: 'anadezuo',
    url: 'https://github.com/anadezuo',
  },
  {
    name: 'Gabriel Bridi Schultz',
    avatar: 'https://avatars.githubusercontent.com/u/81654505?v=4',
    login: 'SchultzGabriel',
    url: 'https://github.com/SchultzGabriel',
  },
  {
    name: 'Danilo Yorinori',
    avatar: 'https://avatars.githubusercontent.com/u/624381?v=4',
    login: 'danilok',
    url: 'https://github.com/danilok',
  },
  {
    name: 'Victor Dantas',
    avatar: 'https://avatars.githubusercontent.com/u/64330605?v=4',
    login: 'victordantasdev',
    url: 'https://github.com/victordantasdev',
  },
];

export default function ProfileScreen() {
  const { posts, user, infoGithub } = usePageContext();

  return (
    <Container>
      <PostsContainer>
        <ul>
          {posts.reverse().map((item) => (
            <li key={item.id}>
              <Header>
                <div className="info">
                  <div className="profilePhoto">
                    <img src={`https://github.com/${infoGithub.username}.png`} alt="Imagem do perfil" />
                  </div>
                  <Text
                    tag="p"
                    variant="subTitle"
                  >
                    {user.username}
                  </Text>
                </div>
                <div>
                  <img src="/images/dot.svg" alt="" />
                </div>
              </Header>
              <PhotoContainer>
                <img src={item.photoUrl} alt="" />
              </PhotoContainer>
              <ActionContainer>
                <div className="icons">
                  <div className="iconsBox">
                    <img src="/images/heart.svg" alt="Imagem de um coração" />
                    <Text tag="p">
                      0
                    </Text>
                  </div>
                  <div className="iconsBox">
                    <img src="/images/talk.svg" alt="" />
                    <Text tag="p" variant="paragraph2">
                      3
                    </Text>
                  </div>
                  <img src="/images/send.svg" alt="" />
                </div>
                <img src="/images/save.svg" alt="" />
              </ActionContainer>
              <InfoContainer>
                <div>
                  <img src="/images/instrutores.svg" alt="Imagem dos instrutores do Bootcamp" />
                  <Text tag="p">
                    Vem novidade por aí!
                  </Text>
                </div>
                <Text tag="span" color="tertiary.light">
                  Mais
                </Text>
              </InfoContainer>
            </li>
          ))}
        </ul>
      </PostsContainer>
      <ProjetosContainer>
        <ul>
          <li key={infoGithub.username}>
            <Box
              display="flex"
              alignItems="center"
            >
              <img src={infoGithub.avatar} alt="Imagem do usuário" className="userAvatar" />
              <Box
                display="flex"
                flexDirection="column"
                padding="10px 16px"
              >
                <Text tag="p" variant="paragraph2" color="tertiary.main" className="login">
                  {infoGithub.username}
                </Text>
                <Text tag="p" variant="paragraph2" color="tertiary.light">
                  {infoGithub.name}
                </Text>
              </Box>
            </Box>
            <a href={infoGithub.url} target="_blank" rel="noopener noreferrer">
              <img src="/images/github.svg" alt="Icone Github" />
              <Text tag="p">
                Github
              </Text>
            </a>
          </li>
          <Text tag="p" variant="paragraph1" color="tertiary.light" className="title">
            Projetos da galera
          </Text>
          {friends.map((item) => (
            <li key={item.name}>
              <Box
                display="flex"
                alignItems="center"
              >
                <img src={item.avatar} alt="" />
                <Box
                  display="flex"
                  flexDirection="column"
                  padding="10px 16px"
                >
                  <Text tag="p" variant="paragraph2" color="tertiary.main" className="login">
                    {item.login}
                  </Text>
                  <Text tag="p" variant="paragraph2" color="tertiary.light">
                    {item.name}
                  </Text>
                </Box>
              </Box>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img src="/images/github.svg" alt="Icone Github" />
                <Text tag="p">
                  Github
                </Text>
              </a>
            </li>
          ))}
        </ul>
      </ProjetosContainer>
    </Container>
  );
}
