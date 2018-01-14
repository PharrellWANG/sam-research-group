/* eslint-disable jsx-a11y/accessible-emoji,react/prop-types */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 18,
  }),
  borderBottom: {
    borderBottom: '1px solid #666',
  },
});

export class PageSubTitle extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes, title } = this.props;
    return (
      <div>
        <Typography type="display1" component="h3" className={classes.root}>
          {title}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(PageSubTitle);
