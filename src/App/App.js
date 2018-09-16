import React from 'react';
import { Provider as StyleProvider } from 'rebass';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import theme from './theme';
import { Header, Body, Footer } from '../layout';

// eslint-disable-next-line
injectGlobal`
  ${normalize()};
  * { box-sizing: border-box; }
  body { margin: 0; }
`;

const App = () => (
  <StyleProvider theme={theme}>
    <Header />
    
    <Body />

    <Footer />
  </StyleProvider>
);

export default App;
