import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import merge from 'lodash/merge';

import store from './store/store.ts';
import { client } from './client.js';
import './index.css';
import baseTheme from './util/theme.ts';

import Index from './page/Index.jsx';
import Nav from './component/Nav.tsx';
import Footer from './component/Footer.jsx';

if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mock/browser.js');
  worker.start();
  console.log('Add mock...');
}

function AppWithTheme() {
  const { isDark } = useSelector((state) => state.darkmode);
  const theme = merge({}, baseTheme, {
    colors: baseTheme.colors.modes[isDark ? 'dark' : 'light'],
  });
  console.log(theme);

  return (
    <ThemeProvider theme={theme}>
      <div
        className={`bg-first min-h-screen dark:text-green-100 text-green-900
            flex flex-col`}
      >
        <Nav />
        <Index />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <AppWithTheme />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement(HMR)
if (import.meta.hot) {
  import.meta.hot.accept();
}
