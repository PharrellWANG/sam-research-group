/**
 *
 * News
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withStyles } from 'material-ui/styles';
// import { FormattedMessage } from 'react-intl';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { compose } from 'redux';

// import injectSaga from 'utils/injectSaga';
// import saga from './saga';
// import messages from './messages';
//
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
    verticalAlign: 'center',
  },
});

export class News extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <div>
        <Helmet>
          <title>News</title>
          <meta name="description" content="Description of News" />
        </Helmet>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Typography type="headline" component="h3" gutterBottom className={classes.sectionTitle}>
                2017
              </Typography>
              <Divider light className={classes.dividerMarginBottom} />
            </Grid>
          </Grid>
        </div>
        <div className={classes.root2}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <div className={classes.indentRow}>
                <Typography type="body2" gutterBottom>
                  {bull}
                </Typography>
                <Typography type="body2" gutterBottom>
                  <div>20/01/2017</div> Our recent paper &#39;<mark>NSSRF: global network similarity search with subgraph signatures and its applications</mark>&#39; has been accepted to <em>Bioinformatics</em>.
                  <br />
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <div className={classes.indentRow}>
                <Typography type="body2" gutterBottom>
                  {bull}
                </Typography>
                <Typography type="body2" gutterBottom>
                  <div>07/01/2017</div> Our recent paper &#39;<mark>Adaptive Two-Level Matching-Based Selection for Decomposition Multi-Objective Optimization</mark>&#39; has been accepted to <em>IEEE Transaction on Evolutionary Computation</em>.
                  <br />
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

News.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
)(News);
