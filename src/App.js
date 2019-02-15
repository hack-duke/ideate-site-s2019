import React from 'react';
import styled from '@emotion/styled';
import { Head } from 'react-static';
import 'minireset.css/minireset.css';
import './typography.css';

import { Header } from './Header.js';
import { BG_COLOR } from './ui.js';

const AppContainer = styled.div`
  background: ${BG_COLOR};
  color: white;
`;

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Head>
          <title>Ideate</title>
          <link
            href="https://fonts.googleapis.com/css?family=Work+Sans:400,600"
            rel="stylesheet"
          />
        </Head>
        <Header />
      </AppContainer>
    );
  }
}

export default App;
