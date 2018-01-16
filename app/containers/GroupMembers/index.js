/* eslint-disable react/prop-types */
/**
 *
 * GroupMembers
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import { Helmet } from 'react-helmet';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import { compose } from 'redux';
import PhdCandidateNameCard from 'components/NameCard/PhdCandidate';
import DirectorNameCard from 'components/NameCard/Director';
import wumengyuan from './img/WUMengyuanSince2014.jpg';

import jiayuheng from './img/jiayuheng.png';
import zhangjia from './img/zhangjia.png';
import wuwenhui from './img/wuwenhui.png';
import zhangjiao from './img/zhangjiao.png';
import zhulinwei from './img/zhulinwei.png';
import caojingchao from './img/caojingchao.png';
import saga from './saga';

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
});

export class GroupMembers extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>GroupMembers</title>
          <meta name="description" content="Description of GroupMembers" />
        </Helmet>
        <div>
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography type="headline" component="h3" gutterBottom className={classes.sectionTitle}>
                  Director
                </Typography>
                <Divider light className={classes.dividerMarginBottom} />
              </Grid>
            </Grid>
          </div>
          <Grid container spacing={24} justify="center" style={{ marginBottom: 12 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              container
              alignItems="center"
              justify="center"
            >
              <DirectorNameCard
                img={wumengyuan}
                personName="WU Mengyuan"
                personTitle1="Ph.D Candidate since 2014"
                personTitle2="Ph.D Candidate since 2014"
                personTitle3="Ph.D Candidate since 2014"
                personTitle4="Ph.D Candidate since 2014"
                interests="Research Interests: Multi-objective Evolutionary Optimization; Simulation based Optimization;"
                email="mengyuan.wu@my.cityu.edu.hk"
              />
            </Grid>
          </Grid>
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography type="headline" component="h3" gutterBottom className={classes.sectionTitle}>
                  Current Ph.D Students
                </Typography>
                <Divider light className={classes.dividerMarginBottom} />
              </Grid>
            </Grid>
          </div>
          <Grid container spacing={24} justify="center" style={{ marginBottom: 12 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              container
              alignItems="center"
              justify="center"
            >
              <PhdCandidateNameCard
                img={wumengyuan}
                personName="WU Mengyuan"
                personTitle="Ph.D Candidate since 2014"
                interests="Research Interests: Multi-objective Evolutionary Optimization; Simulation based Optimization;"
                email="mengyuan.wu@my.cityu.edu.hk"
              />
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
              <PhdCandidateNameCard
                img={jiayuheng}
                personName="JIA Yuheng"
                personTitle="Ph.D Candidate since 2015"
                interests="Machine Learning, Sparse Bayesian Learning, Active Learning"
                email="yhjia3-c@my.cityu.edu.hk"
              />
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
              <PhdCandidateNameCard
                img={zhangjia}
                personName="ZHANG Jia"
                personTitle="Ph.D Candidate since 2015"
                interests="Video Coding, Image Processing"
                email="jzhang393-c@my.cityu.edu.hk"
              />
            </Grid>
          </Grid>
          <Grid container spacing={24} justify="center" style={{ marginBottom: 12 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              container
              alignItems="center"
              justify="center"
            >
              <PhdCandidateNameCard
                img={wuwenhui}
                personName="WU Wenhui"
                personTitle="Ph.D Candidate since 2015"
                interests="Semi-supervised Learning, Image Processing"
                email="wenhuiwu3-c@my.cityu.edu.hk"
              />
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
              <PhdCandidateNameCard
                img={zhangjiao}
                personName="ZHANG Jiao"
                personTitle="Ph.D Candidate since 2015"
                interests="Biological Network, Bioinformatics"
                email="jiaozhang9-c@my.cityu.edu.hk"
              />
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
              <PhdCandidateNameCard
                img={zhulinwei}
                personName="ZHU Linwei"
                personTitle="Ph.D Candidate since 2016"
                interests="Video Coding"
                email="zhulinweiyuchang@163.com"
              />
            </Grid>
          </Grid>
          <Grid container spacing={24} justify="center" style={{ marginBottom: 12 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              container
              alignItems="center"
              justify="center"
            >
              <PhdCandidateNameCard
                img={caojingchao}
                personName="CAO Jingchao "
                personTitle="Ph.D Candidate since 2016"
                interests="Video Coding; Machine learning"
                email="jingccao2-c@my.cityu.edu.hk"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

// GroupMembers.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);
const withSaga = injectSaga({ key: 'groupMembers', saga });

export default compose(
  withSaga,
  withConnect,
  withStyles(styles)
)(GroupMembers);
