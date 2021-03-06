/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import { createGlobalStyle, ServerStyleSheet } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
    min-height: 100%;
    font-family: "Didact Gothic", sans-serif;
  }
`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // styled-components
    const sheet = new ServerStyleSheet();

    // material-ui
    let pageContext;
    const page = ctx.renderPage(Component => {
      const WrappedComponent = props => {
        pageContext = props.pageContext;
        return sheet.collectStyles(<Component {...props} />);
      };

      WrappedComponent.propTypes = {
        pageContext: propTypes.object.isRequired,
      };

      return WrappedComponent;
    });

    const styleTags = sheet.getStyleElement();

    return {
      ...page,
      pageContext,
      styles: (
        <Fragment>
          <style
            id="jss-server-side"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
          />
          {flush() || null}
        </Fragment>
      ),
      styleTags,
    };
  }

  render() {
    const { styleTags, pageContext } = this.props;

    return (
      <html lang="es" dir="ltr">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="theme-color"
            content={pageContext ? pageContext.theme.palette.primary.main : null}
          />
          <meta
            name="description"
            content="Comparte tus prendas con gente de todo el mundo, encuentra nuevos looks y prendas de última moda."
          />
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
          {styleTags}
        </Head>
        <body>
          <GlobalStyle />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
