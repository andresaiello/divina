/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from 'react-apollo';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';

import withApolloClient from '~/HOCs/withApolloClient';
import SecContext from '~/context/secContext';
import getPageContext from '~/lib/getPageContext';
import { fetchWrapper } from '~/util';
import Fonts from '~/lib/Fonts';
import { Loader } from '~/components/shared';

const FontsLoader = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  background: white;
  z-index: 100000;
`;

class MyApp extends App {
  constructor () {
    super();
    this.pageContext = getPageContext();
    this.state = {
      secContext: {
        user: null,
        getUserState: this.getUserState,
      },
      displayLoader: true,
    };
  }

  updateUserState = () => {
    fetchWrapper('/api/user')
      .then(({ user }) => {
        console.log(user);
        this.setState({ secContext: { user } });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async componentDidMount () {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    await Fonts();
    this.setState({ displayLoader: false });
    this.updateUserState();
  }

  render () {
    const { Component, pageProps, apolloClient } = this.props;
    const { displayLoader } = this.state;

    return (
      <SecContext.Provider value={this.state.secContext}>
        <Container>
          <Head>
            <title>DivinApp</title>
          </Head>
          {/* Wrap every page in Jss and Theme providers */}
          <JssProvider
            registry={this.pageContext.sheetsRegistry}
            generateClassName={this.pageContext.generateClassName}
          >
            {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
            <MuiThemeProvider theme={this.pageContext.theme} sheetsManager={this.pageContext.sheetsManager}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server-side. */}
              <ApolloProvider client={apolloClient}>
                {displayLoader ? <FontsLoader><Loader /></FontsLoader> : null}
                <Component pageContext={this.pageContext} {...pageProps} />
              </ApolloProvider>
            </MuiThemeProvider>
          </JssProvider>
        </Container>
      </SecContext.Provider>
    );
  }
}

export default withApolloClient(MyApp);
