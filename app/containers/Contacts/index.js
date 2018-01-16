/**
 *
 * Contacts
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withStyles } from 'material-ui/styles';
// import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
// import Divider from 'material-ui/Divider';
// import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

// import injectSaga from 'utils/injectSaga';
// import saga from './saga';
// import messages from './messages';

const styles = (theme) => ({
  flexGrow: {
    flexGrow: 1,
  },
  root: theme.mixins.gutters({
    paddingTop: 12,
    marginTop: theme.spacing.unit * 2,
  }),
  root2: theme.mixins.gutters({
    paddingTop: 6,
  }),
  overview: theme.mixins.gutters({
    paddingTop: 2,
    // marginTop: theme.spacing.unit * 3,
  }),
  leftAlignRow: {
    display: 'flex',
    textAlign: 'left',
  },
  dividerMarginBottom: {
    marginBottom: 8,
  },
  tableOfContents: {
    margin: theme.spacing.unit * 3,
    borderLeft: '4px solid #3F51B5',
    paddingLeft: 12,
    // padding: 8,
  },
  hashLink: {
    color: '#000000',
    '&:link': {
      textDecoration: 'none',
    },
    '&:visited': {
      textDecoration: 'none',
      color: '#1db532',
    },
    '&:hover': {
      textDecoration: 'none',
      color: '#1db532',
    },
    '&:active': {
      textDecoration: 'none',
      // textDecoration: 'underline',
      color: '#1db532',
    },
    sectionTitle: {
      // paddingTop: 5,
      // paddingBottom: 30,
      marginBottom: 20,
    },
    sectionBody: {
      marginTop: '20px',
      // paddingTop: 30,
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 8px',
    transform: 'scale(1.5)',
    color: '#FF4081',
  },
  indentRow: {
    display: 'flex',
    // margin: 4,
    justifyContent: 'left',
    // verticalAlign: 'center',
  },
});

export class Contacts extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    // const bull = <span className={classes.bullet}>•</span>;
    return (
      <div>
        <Helmet>
          <title>Contacts</title>
          <meta name="description" content="Description of Contacts" />
        </Helmet>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Typography type="headline" component="h3" gutterBottom className={classes.sectionTitle}>
                Prof. Sam KWONG
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.root2}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Typography type="body2">
                Office:
              </Typography>
              <Typography type="body1">
                Y6315, AC1, City University of Hong Kong, Kowloon, Hong Kong
                <br />
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.root2}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Typography type="body2">
                Phone:
              </Typography>
              <Typography type="body1">
                (852)3442 2907
                <br />
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.root2}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Typography type="body2">
                Fax:
              </Typography>
              <Typography type="body1">
                (852)3442 0503
                <br />
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.root2}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Typography type="body2">
                Email:
              </Typography>
              <Typography color="primary" component="a" href="mailto:cssamk@cityu.edu.hk" >
                cssamk@cityu.edu.hk
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Contacts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
)(Contacts);
