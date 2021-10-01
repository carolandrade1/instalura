import React from 'react';
import Box from '../../foundation/Layout/Box';
import Grid from '../../foundation/Layout/Grid';

export default function ProfileScreen() {
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
            offset={{ xs: 0, md: 0 }}
            value={{ xs: 12, md: 6 }}
          >
            <img src="" alt="" />
          </Grid.Col>
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 0, md: 4 }}
          >
            <img src="" alt="" />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}
