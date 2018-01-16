/* eslint-disable jsx-a11y/accessible-emoji,react/prop-types */
/*
 * ResearchEC
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
import EvolutionaryMultiobjectiveOptimization from './EvolutionaryMultiobjectiveOptimization.jpg';
import swarm from './swarm.jpg';

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

export class ResearchEC extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
                    <HashLink className={classes.hashLink} to="#EvolutionaryMultiobjectiveOptimization">Evolutionary Multiobjective Optimization</HashLink>
                  </Typography>
                </div>
                <div className={classes.leftAlignRow}>
                  <Typography type="body1" gutterBottom>
                    <HashLink className={classes.hashLink} to="#ParticleSwarmOptimization">Particle Swarm Optimization</HashLink>
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
                  Our research group has been working in the field of evolutionary computation (EC) since 1996. Our earlier contributions on genetic algorithms are highly cited (Google Scholar, 2110 times, 23 Oct. 2014). We have extensive experiences on evolutionary algorithm design, both for single and multi-objective optimization problems.
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div className={classes.root} id="EvolutionaryMultiobjectiveOptimization">
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography type="headline" component="h3" gutterBottom>
                  Evolutionary Multiobjective Optimization
                </Typography>
                <Divider light className={classes.dividerMarginBottom} />
              </Grid>
            </Grid>
            <ResearchTile
              imageSrc={EvolutionaryMultiobjectiveOptimization}
              imageAlt={'Sam - Department of Computer Science'}
              title={false}
              publications={[
                'Ke Li, Qingfu Zhang, Sam Kwong, Miqing Li, Ran Wang, Stable Matching Based Selection in Evolutionary Multiobjective Optimization, IEEE Transactions on Evolutionary Computation, 18(6): 909-923, 2014. (Top 25 popular article in IEEE Transactions of Evolutionary Computation)',
                'Ke Li, Alvaro Fialho, Sam Kwong, Qingfu Zhang, Adaptive Operator Selection with Bandits for Multiobjective Evolutionary Algorithm Based on Decomposition, IEEE Transactions on Evolutionary Computation, 18(1): 114-130, 2014. (Top 25 popular article in IEEE Transctions of Evolutionary Computation)',
                'Ke Li, Sam Kwong, Ran Wang, Kit-Sang Tang, Kim-Fung Man, Learning Paradigm Based on Jumping Genes: A General Framework for Enhancing Exploration in Evolutionary Multiobjective Optimization, Information Sciences, 226: 1-22, 2013.',
                'Ke Li, Sam Kwong, Jingjing Cao, Miqing Li, Jinhua Zheng, Ruimin Shen, Achieving Balance Between Proximity and Diversity in Multi-objective Evolutionary Algorithm, Information Sciences, 182(1): 220-242, 2012.',
              ]}
            />
          </div>
          <div className={classes.root} id="ParticleSwarmOptimization">
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography type="headline" component="h3" gutterBottom>
                  Particle Swarm Optimization
                </Typography>
                <Divider light className={classes.dividerMarginBottom} />
              </Grid>
            </Grid>
            <ResearchTile
              imageSrc={swarm}
              imageAlt={'Sam - Department of Computer Science'}
              title={false}
              publications={[
                'Hao Gao, Sam Kwong, Baojie Fan, Ran Wang, A Hybrid Particle-Swarm Tabu Search Algorithm for Solving Job Shop Scheduling Problems. IEEE Transactions on Industrial Informatics, 10(4): 2044-2054 (2014)',
                'Hao Gao, Sam Kwong, Jijiang Yang, Jingjing Cao, Particle Swarm Optimization based on Intermediate Disturbance Strategy Algorithm and Its Application in Multi-threshold Image Segmentation, Information Sciences, 250: 82-112 (2013)',
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ResearchEC);
