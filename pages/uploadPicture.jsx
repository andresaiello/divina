import React from 'react';
import propTypes from 'prop-types';

import { Profile } from '~/components/Profiles';

export default class extends React.Component {
  static async getInitialProps ({ query }) {
    return { ...query };
  }

  render () {
    return <Profile username={this.props.username} />;
  }
}
