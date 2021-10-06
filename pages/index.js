import React from 'react';
import Text from '../src/components/foundation/Text';
import Button from '../src/components/commons/Button';
import Box from '../src/components/foundation/Layout/Box';
import Grid from '../src/components/foundation/Layout/Grid';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import { usePageContext } from '../src/components/wrappers/WebsitePage/context';

// eslint-disable-next-line react/prop-types
function HomeScreen() {
  const { toggleModalCadastro } = usePageContext();

  return (
    <Box flex="1">
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '73px',
        }}
      >
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 5 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
              margin={{
                xs: '0px',
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
              margin={{
                xs: '12px 0 24px 0',
                md: '16px 0 40px 0',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s.
            </Text>

            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={() => toggleModalCadastro()}
            >
              Cadastrar
            </Button>
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <img
              alt="Imagem de celular com páginas internas do projeto com o perfil do Cage"
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});
