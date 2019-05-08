import React from 'react';
import propTypes from 'prop-types';
import Iframe from 'react-iframe';
import Input from '@material-ui/core/Input';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import Button from '@material-ui/core/Button';

export default class extends React.Component {
  static async getInitialProps({ query }) {
    return { ...query };
  }

  constructor(props) {
    super(props);
    this.state = {
      googleQuery: '',
      googleResults: [],
      url: null,
    };
  }

  search = () => {
    this.setState({ url: null });
    fetch(`/api/google/${this.state.googleQuery}`)
      .then(response => response.json())
      .then(data => this.setState({ googleResults: data }));
  };

  handleSearchBarChange = event => {
    this.setState({
      googleQuery: event.target.value,
    });
  };

  render() {
    const { googleQuery, googleResults, url } = this.state;

    return (
      <div>
        <Input
          placeholder="Buscar"
          className="search-bar"
          value={googleQuery}
          onChange={this.handleSearchBarChange}
        />
        <Button variant="contained" onClick={() => this.search()}>
          Buscar
        </Button>
        <span />

        <div>
          <List>
            {!url &&
              googleResults.map(elem => (
                <ListItem onClick={() => this.setState({ url: elem.url })}>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={elem.title} secondary="Secondary text" />
                </ListItem>
              ))}
          </List>
        </div>
        {url && (
          <Iframe
            url={url}
            width="100%"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen
          />
        )}
      </div>
    );
  }
}
