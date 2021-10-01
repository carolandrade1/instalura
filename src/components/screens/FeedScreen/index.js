import React from 'react';
import Box from '../../foundation/Layout/Box';
import Grid from '../../foundation/Layout/Grid';

export default function FeedScreen() {
  return (
    <Box
      marginTop={{
        xs: '48px',
        md: '97px',
      }}
    >
      <Grid.Container
        marginTop={{
          xs: '0',
          md: '26px',
        }}
      >
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 2 }}
            value={{ xs: 12, md: 8 }}
          >
            <img src="https://images.ctfassets.net/hrltx12pl8hq/6TOyJZTDnuutGpSMYcFlfZ/4dfab047c1d94bbefb0f9325c54e08a2/01-nature_668593321.jpg?fit=fill&w=480&h=270" alt="" />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}
