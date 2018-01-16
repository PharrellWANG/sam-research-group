/* eslint-disable jsx-a11y/accessible-emoji,react/prop-types */
/*
 * ResearchMachineLearning
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';

// import Paper from 'material-ui/es/Paper/Paper';
import { HashLink } from 'react-router-hash-link';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
// import Paper from 'material-ui/Paper';
import PageSubTitle from 'components/PageSubTitle';
// import Divider from 'material-ui/Divider';
import ResearchTile from 'components/ResearchTile';
import activeLearning from './activeLearning.jpg';
import svm from './svm.jpg';
import decisionTree from './decisionTree.jpg';
import ensembleLearning from './ensembleLearning.png';

const styles = (theme) => ({
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
    marginBottom: 20,
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

export class ResearchMachineLearning extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>Research - Video Coding Optimization</title>
          <meta name="description" content="Research - Pattern Recognition and Machine Learning" />
        </Helmet>
        <PageSubTitle title="Pattern Recognition and Machine Learning" />
        <div>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={12}>
              <div className={classes.tableOfContents}>
                <div className={classes.leftAlignRow} >
                  <Typography type="display1" style={{ fontSize: 15, fontWeight: 550 }} gutterBottom>
                      Contents
                    </Typography>
                </div>
                <div className={classes.leftAlignRow}>
                  <Typography type="body1" gutterBottom>
                    <HashLink className={classes.hashLink} to="#overview">Overview</HashLink>
                  </Typography>
                </div>
                <div className={classes.leftAlignRow}>
                  <Typography type="body1" gutterBottom>
                    <HashLink className={classes.hashLink} to="#ActiveLearning">Active Learning</HashLink>
                  </Typography>
                </div>
                <div className={classes.leftAlignRow}>
                  <Typography type="body1" gutterBottom>
                    <HashLink className={classes.hashLink} to="#SupportVectorMachine">Support Vector Machine</HashLink>
                  </Typography>
                </div>
                <div className={classes.leftAlignRow}>
                  <Typography type="body1" gutterBottom>
                    <HashLink className={classes.hashLink} to="#DecisionTree">Decision Tree</HashLink>
                  </Typography>
                </div>
                <div className={classes.leftAlignRow}>
                  <Typography type="body1" gutterBottom>
                    <HashLink className={classes.hashLink} to="#EnsembleLearning">Ensemble Learning</HashLink>
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className={classes.overview} id="overview">
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography type="headline" component="h3" gutterBottom className={classes.sectionTitle}>
                  Overview
                </Typography>
                <Divider light className={classes.dividerMarginBottom} />
                <Typography component="p" gutterBottom >
                  Our research group has been working on supervised and unsupervised learning for more than ten years. Our groups work includes support vector machines, extreme learning machines, active learning, ensemble learning and their applications on bio-medical  and image processing.
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div className={classes.root} id="ActiveLearning">
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography type="headline" component="h3" gutterBottom>
                  Active Learning
                </Typography>
                <Divider light className={classes.dividerMarginBottom} />
              </Grid>
            </Grid>
            <ResearchTile
              imageSrc={activeLearning}
              imageAlt={'Sam - Department of Computer Science'}
              title={false}
              publications={[
                'Ran Wang, Degang Chen, and Sam Kwong*. Fuzzy Rough Set based Active Learning. IEEE Transactions on Fuzzy Systems, 22(6): 1699–1704 (2014)',
                'Ran Wang, and Sam Kwong*. Active Learning with Multi-criteria Decision Making Systems, Pattern Recognition, 47(9): 3106–3119 (2014).',
                'Ran Wang, Sam Kwong*, and Degang Chen, Inconsistency-based Active Learning for Support Vector Machines, Pattern Recognition, 45(10): 3751–3767 (2012).',
              ]}
            />
          </div>
          <div className={classes.root} id="SupportVectorMachine">
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography type="headline" component="h3" gutterBottom>
                  Support Vector Machine
                </Typography>
                <Divider light className={classes.dividerMarginBottom} />
              </Grid>
            </Grid>
            <ResearchTile
              imageSrc={svm}
              imageAlt={'Sam - Department of Computer Science'}
              title={false}
              publications={[
                'Ran Wang, Sam Kwong*, Degang Chen, and Jingjing Cao, A Vector-valued Support Vector Machine Model for Multiclass Problem. Information Sciences, 235: 174–194 (2013). ',
              ]}
            />
          </div>
          <div className={classes.root} id="DecisionTree">
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography type="headline" component="h3" gutterBottom>
                  Decision Tree
                </Typography>
                <Divider light className={classes.dividerMarginBottom} />
              </Grid>
            </Grid>
            <ResearchTile
              imageSrc={decisionTree}
              imageAlt={'Sam - Department of Computer Science'}
              title={false}
              publications={[
                'Ran Wang, Sam Kwong*, Xi-Zhao Wang, and Qingshan Jiang, Segment based Decision Tree Induction with Continuous Valued Attributes, IEEE Transactions on Cybernetics (article in press, DOI: 10.1109/TCYB.2014 .2348012).',
              ]}
            />
          </div>
          <div className={classes.root} id="EnsembleLearning">
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography type="headline" component="h3" gutterBottom>
                  Ensemble Learning
                </Typography>
                <Divider light className={classes.dividerMarginBottom} />
              </Grid>
            </Grid>
            <ResearchTile
              imageSrc={ensembleLearning}
              imageAlt={'Sam - Department of Computer Science'}
              title={false}
              publications={[
                'Jingjing Cao, Sam Kwong, Ran Wang, Xiaodong Li, Ke Li, Xiangfei Kong, “Class-specific Soft Voting based Multiple Extreme Learning Machines Ensemble”, Neurocomputing, 149: 275-284 (2015). [Project Page]',
                'Jingjing Cao, Sam Kwong, Ran Wang, “A Noise-Detection based Adaboost Algorithm for Mislabeled Data,” Pattern Recognition, 45 (12): 4451-4465 (2012).',
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ResearchMachineLearning);
