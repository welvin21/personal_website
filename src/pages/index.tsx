import React from 'react';
import { Heading, Text } from '@chakra-ui/core';

import { Layout, SEO, Construction } from '../components';
import { LocationContext } from '../context';

const IndexPage: React.FC<any> = ({ location }) => {
  return (
    <LocationContext.Provider value={location}>
      <Layout>
        <SEO title="About" />
        <Construction />
      </Layout>
    </LocationContext.Provider>
  );
};

export default IndexPage;