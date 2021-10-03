/* eslint-disable react/prop-types */
import React from 'react';
import Box from '../../foundation/Layout/Box';
import Text from '../../foundation/Text';
import InfoContainer, {
  Container, ImageContainer, ListContainer, User,
} from './style';

export default function ProfileScreen({ props }) {
  // NUMEROS SEGUIDORES-SEGUINDO
  const [infoGithub, setInfoGithub] = React.useState([]);

  React.useEffect(() => {
    const githubAPI = `https://api.github.com/users/${props.user.username}`;
    fetch(githubAPI)
      .then((resposta) => resposta.json())
      .then((respostaJson) => setInfoGithub(respostaJson));
  }, []);

  const Info = [
    {
      number: `${infoGithub.following}`,
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
    >
      <Container>
        <InfoContainer>
          <ImageContainer>
            <img src={`https://github.com/${props.user.username}.png`} alt="" />
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
              tag="a"
              variant="paragraph1"
              color="tertiary.light"
              href={infoGithub.blog}
            >
              😃 Visite meu blog/canal/site!
            </Text>
          </User>
        </InfoContainer>
      </Container>
    </Box>
  );
}
