import React from 'react';
import { useTheme } from 'styled-components';
import { usePageContext } from '../../wrappers/WebsitePage/context';
import Grid from '../../foundation/Layout/Grid';
import Box from '../../foundation/Layout/Box';
import Text from '../../foundation/Text';

export default function FAQQuestionScreen() {
  const theme = useTheme();
  const { category, question } = usePageContext();
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
      justifyContent="center"
    >
      <Grid.Container
        flex="1"
        marginTop={{
          xs: '32px',
          md: '80px',
        }}
      >
        <Grid.Row
          flexDirection={{
            xs: 'column-reverse',
            md: 'row',
          }}
        >
          <Grid.Col
            offset={{ sm: 0, lg: 1 }}
            value={{ xs: 12, md: 4, lg: 4 }}
          >
            <Text
              variant="title"
              color="tertiary.main"
              marginBottom="25px"
            >
              Artigos
              <br />
              Relacionados
            </Text>
            <Box
              as="ul"
              listStyle="none"
              padding="24px 30px"
              backgroundColor={theme.colors.borders.main.color}
              borderRadiusTheme
            >
              {category.questions.map((currentQuestion) => (
                <Text
                  key={currentQuestion.slug}
                  as="li"
                  variant="paragraph2"
                  href={`/${currentQuestion.slug}`}
                  color="primary.main"
                  marginBottom="16px"
                >
                  {currentQuestion.title}
                </Text>
              ))}
            </Box>
          </Grid.Col>

          <Grid.Col
            value={{ lg: 6 }}
            marginBottom={{
              xs: '50px',
              md: '0',
            }}
          >
            <Text
              variant="title"
              color="tertiary.main"
            >
              {question.title}
            </Text>
            <Text
              as="p"
              variant="paragraph1"
              color="tertiary.light"
                          // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: question.description }}
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}
