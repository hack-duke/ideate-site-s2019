import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { Head } from 'react-static';
import 'minireset.css/minireset.css';
import './typography.css';

import { Header } from './Header.js';
import { About } from './About.js';
import { Speakers } from './Speakers.js';
import { Schedule } from './Schedule.js';
import { FAQs } from './FAQs.js';
import { Footer } from './Footer.js';
import { BG_COLOR } from './ui.js';

import Stars from './img/stars-bg.svg';

const globalStyles = css`
  body {
    background: ${BG_COLOR};
    background-image: url(${Stars});
    background-size: 90%;
    color: white;
  }
`;

class App extends React.Component {
  render() {
    return (
      <>
        <Global styles={globalStyles} />
        <Head>
          <title>IDEATE</title>
          <link
            href="https://fonts.googleapis.com/css?family=Work+Sans:400,600"
            rel="stylesheet"
          />
          <meta name="theme-color" content={BG_COLOR} />
        </Head>
        <Header />
        <About />
        <Speakers />
        <Schedule />
        <FAQs />
        <Footer />
      </>
    );
  }
}

export default App;
