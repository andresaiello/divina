import React, { Fragment } from 'react';

import { BottomAppBar } from '../components/shared';

export default BaseComponent => props => (
  <Fragment>
    <BaseComponent {...props} />
    <BottomAppBar />
  </Fragment>
);
