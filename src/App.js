import React from 'react';
import styled from '@emotion/styled';

import 'minireset.css/minireset.css';

const AppContainer = styled.div`
  background: red;
`;

class App extends React.Component {
  render() {
    return <AppContainer>Hello World</AppContainer>;
  }
}

export default App;
