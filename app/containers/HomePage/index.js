/* eslint-disable jsx-a11y/accessible-emoji */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import samCsDepartment from './sam-cs.png';

const styles = (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  imageAutoScale: {
    maxWidth: '100%',
    height: 'auto',
    width: 'auto', /* ie8 */
    paddingBottom: 16,
  },
});

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  render() {
    const { classes } = this.props;
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Home page of Prof.Sam KWONG'S research group" />
        </Helmet>
        <div>
          <Paper className={classes.root} elevation={4}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <img className={classes.imageAutoScale} src={samCsDepartment} alt="Sam - Department of Computer Science" />
              </Grid>
            </Grid>
            <Typography type="headline" component="h3">
              Welcome to Our Research Group <span>🙂</span>
            </Typography>
            <Typography component="p">
              Our group mainly focuses on the video coding optimization, pattern recognition and machine learning, and evolutionary computation algorithms.
            </Typography>
          </Paper>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
