import React from 'react';
// import PropTypes from 'prop-types';
import Box from '../../foundation/Layout/Box';
import Grid from '../../foundation/Layout/Grid';
import Text from '../../foundation/Text';
import { usePageContext } from '../../wrappers/WebsitePage/context';

export { getContent } from './getContent';

function AboutScreen() {
  const { messages } = usePageContext();
  const title = messages.pageSobre.pageTitle;
  const description = messages.pageSobre.pageDescription;

  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <Grid.Container>
        <Grid.Row marginTop={{ xs: '32px', md: '120px' }} flex="1">
          <Grid.Col value={{ xs: 12, md: 6, lg: 6 }} offset={{ md: 2 }} flex={1}>
            <Text variant="title" tag="h2" color="tertiary.main" cmsContent={title} />

            <Box
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}

// AboutScreen.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   messages: PropTypes.object.isRequired,
// };

export default AboutScreen;
