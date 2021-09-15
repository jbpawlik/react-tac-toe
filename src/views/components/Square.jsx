import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from "material-ui/styles";
import Icon from 'material-ui/Icon';

const styles = theme => ({
  icon: {
    fontSize: '2em'
  }
});

const playerIcon = player => {
  switch (player) {
    case 1:
      return 'clear';
    case 2:
      return 'radio_button_unchecked';
    default:
      return '';
  }
};

const Square = ({ classes, player }) => {
  return (
    <Icon className={classes.icon}>{playerIcon(player)}</Icon>
  );
};

const {object, number} = PropTypes;

Square.propTypes = {
  classes: object.isRequired,
  player: number.isRequired
};

export default withStyles(styles)(Square);

