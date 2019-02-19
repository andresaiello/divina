import React from 'react';
import styled from 'styled-components';

export default class Messages extends React.PureComponent {
    state = {
    }

    componentDidMount () {
      this.props.subscribeToMore();
    }

    render () {
      const { posts } = this.props;
      console.log(posts);

      return (
        <div>
          {posts.map(({
            id, from, text,
          }) => (
            <div
              key={id}
            >
              {id}
>
              {from}
:
              {' '}
              {text}

            </div>
          ))}
        </div>
      );
    }
}
