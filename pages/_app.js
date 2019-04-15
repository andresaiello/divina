/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import getConfig from 'next/config';
import { ApolloProvider } from 'react-apollo';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import ReactGA from 'react-ga';

import withApolloClient from '~/HOCs/withApolloClient';
import SecContext from '~/context/secContext';
import PictureUploadContext from '~/context/PictureUploadContext';
import getPageContext from '~/lib/getPageContext';
import { fetchWrapper } from '~/util';
import Fonts from '~/lib/Fonts';
import { LoadingScreen, NonAllowedOrientation } from '~/components/shared';

const { publicRuntimeConfig } = getConfig();
const { ANALYTICS_TRACKING_ID } = publicRuntimeConfig;

// @todo set 404

const setOrientationChangeCallback = (onNewOrientation) => {
  if ('onorientationchange' in window) {
    window.onorientationchange = () => {
      if ('orientation' in window) {
        onNewOrientation(window.orientation);
      }
    };
  }
};

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // this will be executed on each page change, the first pageview will be dispatched by componentDidMount
    if (process.browser) ReactGA.pageview(ctx.asPath);

    return { pageProps, router };
  }

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
    validOrientation: true,
  };

  updateUserState = async () => fetchWrapper('/api/user')
    .then((user) => {
      this.setState(({ secContext }) => ({ secContext: { ...secContext, user } }));
    })
    .catch((error) => {
      this.setState(({ secContext }) => ({ secContext: { ...secContext, user: null } }));
      console.log(error);
    })

  onNewOrientation = (newOrientation) => {
    if (newOrientation === 0) this.setState({ validOrientation: true });
    else this.setState({ validOrientation: false });
  }

  async componentDidMount () {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    if (window.orientation) this.onNewOrientation(window.orientation);
    setOrientationChangeCallback(this.onNewOrientation);

    ReactGA.initialize(ANALYTICS_TRACKING_ID);
    // first pageview gets dispatched here, the following in getInitialProps
    ReactGA.pageview(window.location.pathname + window.location.search);

    try {
      await Promise.all([Fonts(), this.updateUserState()]);
      this.setState({ loading: false });
    } catch (e) {
      console.log(e);
      this.setState({ loading: false });
    }

    this.setState({ displayLoader: false });
  }

  render () {
    const { Component, pageProps, apolloClient } = this.props;
    const {
      displayLoader, secContext, pictureUploadContext, validOrientation,
    } = this.state;

    return (
      <PictureUploadContext.Provider value={pictureUploadContext}>
        <SecContext.Provider value={secContext}>
          <Container>
            <Head>
              <title>Divina app</title>
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
                    {validOrientation
                      ? <Component pageContext={this.pageContext} {...pageProps} />
                      : <NonAllowedOrientation />
                    }
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
