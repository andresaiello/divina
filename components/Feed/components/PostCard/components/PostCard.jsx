import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

import { Link } from '~/server/routes';
import { Image } from '~/components/shared';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const StyledCard = styled(Card)`
  margin: 5px auto;

  .profileName {
    display: inline-block;
  }

  .actions {
    justify-content: flex-end;
  }
`;

function PostCard ({ classes, picUrl }) {
  return (
    <StyledCard className={classes.card}>
      <CardHeader
        avatar={(
          <Link route="profile" prefetch>
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          </Link>
        )}
        action={(
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        )}
        title={(
          <Link route="profile" prefetch>
            <div className="profileName">chica123</div>
          </Link>
        )}
        subheader="Hace 10 minutos"
      />
      <Image
        className="cardPic"
        height="250px"
        src={picUrl}
        withLoader
        alt="Foto"
      />
      <CardContent>
        <Typography component="p">
          Hola!
        </Typography>
      </CardContent>
      <CardActions className="actions" disableActionSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
}

PostCard.propTypes = {
  picUrl: propTypes.string.isRequired,
};

export default withStyles(styles)(PostCard);
