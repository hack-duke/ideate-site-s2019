import React from 'react';
import { Global, css } from '@emotion/core';
import { Head } from 'react-static';
import 'minireset.css/minireset.css';

import { Header } from './Header.js';
import { About } from './About.js';
import { Speakers } from './Speakers.js';
import { Workshops } from './Workshops.js';
import { Schedule } from './Schedule.js';
import { FAQs } from './FAQs.js';
import { Footer } from './Footer.js';
import { BG_COLOR } from './ui.js';

// See https://bugs.chromium.org/p/chromium/issues/detail?id=934314
import Stars from './img/stars-bg.png';

const globalStyles = css`
  body {
    color: white;
    background: ${BG_COLOR};
    background-image: url(${Stars});
    background-position: center;
    background-size: 1120px;

    @media screen and (min-width: 768px) {
      background-size: 2000px;
    }
  }

  body,
  button {
    font-family: 'Work Sans', sans-serif;
  }
`;

const App = () => (
  <>
    <Global styles={globalStyles} />
    <Head>
      <title>IDEATE</title>
      <link
        href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,600"
        rel="stylesheet"
      />
      <meta name="theme-color" content={BG_COLOR} />
      <meta
        property="og:image"
        content="https://ideate.hackduke.org/og-thumbnail.jpg"
      />
      <meta property="og:title" content="IDEATE" />
      <meta
        property="og:description"
        content="A student innovation & design conference - April 6th, 2019 at Gross Hall"
      />
    </Head>
    <Header />
    <About />
    <Speakers />
    <Workshops />
    <Schedule />
    <FAQs />
    <Footer />
  </>
);
export default App;
