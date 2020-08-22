import React from 'react';
import { Heading, Text, Box } from '@chakra-ui/core';

import { SEO, Layout } from '../components/';
import { LocationContext } from '../context';

const NotFoundPage: React.FC<any> = ({ location }) => (
  <LocationContext.Provider value={location}>
    <Layout>
      <SEO title="404: Not found" />
      <Box>
        <Heading as="h2">NOT FOUND</Heading>
        <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
      </Box>
    </Layout>
  </LocationContext.Provider>
);

export default NotFoundPage;