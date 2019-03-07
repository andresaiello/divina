/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from 'react-apollo';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';

import withApolloClient from '~/HOCs/withApolloClient';
import SecContext from '~/context/secContext';
import PictureUploadContext from '~/context/PictureUploadContext';
import getPageContext from '~/lib/getPageContext';
import { fetchWrapper } from '~/util';
import Fonts from '~/lib/Fonts';
import { LoadingScreen } from '~/components/shared';

// @todo set 404

class MyApp extends App {
  pageContext = getPageContext();

  uploadPicture = ({ src, width, height }, callback) => {
    this.setState(({ pictureUploadContext }) => ({
      pictureUploadContext: {
        ...pictureUploadContext, src, width, height,
      },
    }), callback);
  }

  state = {
    secContext: {
      user: null,
      loading: false,
      updateUserState: this.updateUserState,
    },
    pictureUploadContext: {
      src: null,
      width: null,
      height: null,
      uploadPicture: this.uploadPicture,
    },
    displayLoader: true,
  };


  updateUserState = async () => fetchWrapper('/api/user')
    .then((user) => {
      this.setState(({ secContext }) => ({ secContext: { ...secContext, user, loading: false } }));
    })
    .catch((error) => {
      this.setState(({ secContext }) => ({ secContext: { ...secContext, user: null, loading: false } }));
      console.log(error);
    })

  async componentDidMount () {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    try {
      await Promise.all([Fonts(), this.updateUserState()]);
    } catch (e) {
      console.log(e);
    }

    this.setState({ displayLoader: false });
  }

  render () {
    const { Component, pageProps, apolloClient } = this.props;
    const { displayLoader, secContext, pictureUploadContext } = this.state;

    return (
      <PictureUploadContext.Provider value={pictureUploadContext}>
        <SecContext.Provider value={secContext}>
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
              <ThemeProvider theme={this.pageContext.theme}>
                <MuiThemeProvider theme={this.pageContext.theme} sheetsManager={this.pageContext.sheetsManager}>
                  {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                  <CssBaseline />
                  {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server-side. */}
                  <ApolloProvider client={apolloClient}>
                    {displayLoader ? <LoadingScreen /> : null}
                    <Component pageContext={this.pageContext} {...pageProps} />
                  </ApolloProvider>
                </MuiThemeProvider>
              </ThemeProvider>
            </JssProvider>
          </Container>
        </SecContext.Provider>
      </PictureUploadContext.Provider>
    );
  }
}

export default withApolloClient(MyApp);
