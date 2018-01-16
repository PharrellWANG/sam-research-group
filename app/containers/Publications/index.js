/**
 *
 * Publications
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import A from 'components/A';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

// import messages from './messages';

const styles = (theme) => ({
  flexGrow: {
    flexGrow: 1,
  },
  root: theme.mixins.gutters({
    paddingTop: 12,
    marginTop: theme.spacing.unit * 2,
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
  },
  sectionTitle: {
    paddingTop: 25,
    // paddingBottom: 30,
    // marginBottom: 2,
  },
  sectionBody: {
    marginTop: '20px',
    // paddingTop: 30,
  },
});

export class Publications extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>Publications</title>
          <meta name="description" content="Description of Publications" />
        </Helmet>
        <div className={classes.overview} id="overview">
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Typography type="headline" component="h3" gutterBottom className={classes.sectionTitle}>
                Overview
              </Typography>
              <Divider light className={classes.dividerMarginBottom} />
              <Typography component="p" gutterBottom >
                Our group have published more than 200 refereed International journal and conference papers. You can access them by click the following links.
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Grid container spacing={24} justify="center" style={{ marginTop: 24 }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            container
            alignItems="center"
            justify="center"
          >
            <A target="_blank" href="https://scholar.google.com/citations?user=_PVI6EAAAAAJ&hl=en&citsig=AMstHGSKqdYD35Cz3K0BVPuqVAFsGbBb5Q">
              Google Scholar
            </A>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            container
            alignItems="center"
            justify="center"
          >
            <A target="_blank" href="http://www.informatik.uni-trier.de/~ley/pers/hd/k/Kwong:Sam.html">
              dblp
            </A>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            container
            alignItems="center"
            justify="center"
          >
            <A target="_blank" href="https://www.scopus.com/authid/detail.url?authorId=7005601503">
              Scopus
            </A>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Publications.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
)(Publications);
