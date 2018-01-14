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
import gameTheoretic from './game-theoretic-based.png';
import windowLevel from './windowLevel.jpg';
import statModelBased from './statisticall-model-based.png';
import RateDistortionBitAllocation from './rate-distortion-bit-allocation.png';
import OptimalStopping from './optimal-stopping.png';
import statModelBasedFastAlgorithm from './stat-model-based-fast-algorithm.png';

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
          <meta name="description" content="Research - Video Coding Optimization" />
        </Helmet>
        <PageSubTitle title="Video Coding Optimization" />
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
                    <HashLink className={classes.hashLink} to="#RateControlOptimizations">Rate Control Optimizations</HashLink>
                  </Typography>
                </div>
                <div className={classes.leftAlignRow}>
                  <Typography type="body1" gutterBottom>
                    <HashLink className={classes.hashLink} to="#RateDistortionandBitAllocationOptimization">Rate Distortion and Bit Allocation Optimization</HashLink>
                  </Typography>
                </div>
                <div className={classes.leftAlignRow}>
                  <Typography type="body1" gutterBottom>
                    <HashLink className={classes.hashLink} to="#LowComplexityVideoCoding">Low Complexity Video Coding</HashLink>
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
                  Since 2004, our research group has been working on optimization techniques for video coding, including MPEG-4, H.264/AVC, High Efficiency Video Coding (HEVC), Scalable Video Coding (SVC), Multiview Video Coding (MVC) and Three-Dimensional Video Coding (3DVC). The main focus has been on two key optimization problems of video coding, namely resource allocation optimization problems (e.g.,  and rate control optimization and rate-distortion optimization) and optimal decision making problems (e.g., efficient zero coefficient early determination, fast motion estimation and low complexity mode decision).
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div className={classes.root} id="RateControlOptimizations">
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography type="headline" component="h3" gutterBottom>
                  Rate Control Optimizations
                </Typography>
                <Divider light className={classes.dividerMarginBottom} />
              </Grid>
            </Grid>
            <ResearchTile
              imageSrc={gameTheoretic}
              imageAlt={'Sam - Department of Computer Science'}
              title={'Game Theoretic based Rate Control Optimization'}
              publications={[
                'Xu Wang, Sam Kwong, Long Xu, Yun Zhang, Generalized Nash Bargaining Solution to Rate Control Optimization for Spatial Scalable Video Coding, IEEE Transactions on Image Processing, 23(9): 4010-4021 (2014)',
                'Xu Wang, Sam Kwong, Yun Zhang, Applying Game Theory to Rate Control Optimization for Hierarchical B-Pictures, IEEE Transactions on Broadcasting, 59(4): 591-601 (2013)',
              ]}
            />
            <ResearchTile
              imageSrc={windowLevel}
              imageAlt={'Sam - Department of Computer Science'}
              title={'Window Level Rate Control Optimization'}
              publications={[
                'Long Xu, Sam Kwong, Yun Zhang, Debin Zhao, Low-Complexity Encoder Framework for Window-Level Rate Control Optimization, IEEE Transactions on Industrial Electronics, 60(5): 1850-1858 (2013)',
                'Long Xu, Sam Kwong, Hanli Wang, Yun Zhang, Debin Zhao, Wen Gao: A Universal Rate Control Scheme for Video Transcoding, IEEE Transactions on Circuits Systems and Video Technology, 22(4):489-501 (2012)',
                'Long Xu, Debin Zhao, Xiangyang Ji, Lei Deng, Sam Kwong, Wen Gao, Window-Level Rate Control for Smooth Picture Quality and Smooth Buffer Occupancy, IEEE Transactions on Image Processing, 20(3):723-734 (2011)',
              ]}
            />
            <ResearchTile
              imageSrc={statModelBased}
              imageAlt={'Sam - Department of Computer Science'}
              title={'Statistical Model based Rate Control Optimization'}
              publications={[
                'Sudeng Hu, Sam Kwong, Yun Zhang, C.-C. Jay Kuo, Rate-Distortion Optimized Rate Control for Depth Map-Based 3-D Video Coding, IEEE Transactions on Image Processing, 22(2): 585-594 (2013)',
                'Sudeng Hu, Hanli Wang, Sam Kwong: Adaptive Quantization-Parameter Clip Scheme for Smooth Quality in H.264/AVC, IEEE Transactions on Image Processing, 21(4):1911-1919 (2012)',
                'Sudeng Hu, Hanli Wang, Sam Kwong, C.-C. Jay Kuo: Novel Rate-Quantization Model-Based Rate Control With Adaptive Initialization for Spatial Scalable Video Coding, IEEE Transactions on Industrial Electronics, 59(3):1673-1684 (2012)',
                'Sudeng Hu, Hanli Wang, Sam Kwong, Tiesong Zhao, C.-C. Jay Kuo: Rate Control Optimization for Temporal-Layer Scalable Video Coding. IEEE Transactions on Circuits Systems and Video Technology, 21(8):1152-1162 (2011)',
              ]}
            />
          </div>
          <div className={classes.root} id="RateDistortionandBitAllocationOptimization">
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography type="headline" component="h3" gutterBottom>
                  Rate Distortion and Bit Allocation Optimization
                </Typography>
                <Divider light className={classes.dividerMarginBottom} />
              </Grid>
            </Grid>
            <ResearchTile
              imageSrc={RateDistortionBitAllocation}
              imageAlt={'Sam - Department of Computer Science'}
              title={'Rate Distortion and Bit Allocation Optimization for 3D Video Coding'}
              publications={[
                'Hui Yuan, Sam Kwong, Chuan Ge, Xu Wang, Yun Zhang, Interview Rate Distortion Analysis-Based Coarse to Fine Bit Allocation Algorithm for 3-D Video Coding, IEEE Transactions on Broadcasting, 60(4): 614-625 (2014)',
                'Hui Yuan, Sam Kwong, Ju Liu, Jiande Sun, A Novel Distortion Model and Lagrangian Multiplier for Depth Maps Coding. IEEE Transactions on Circuits Systems and Video Technology, 24(3): 443-451 (2014)',
                'Yun Zhang, Sam Kwong, Sudeng Hu, C.-C. Jay Kuo, Efficient Multiview Depth Coding Optimization Based on Allowable Depth Distortion in View Synthesis, IEEE Transactions on Image Processing, 23(11): 4879-4892 (2014)',
                'Yun Zhang, Sam Kwong, Long Xu, Sudeng Hu, Gangyi Jiang, C.-C. Jay Kuo, Regional Bit Allocation and Rate Distortion Optimization for Multiview Depth Video Coding With View Synthesis Distortion Model, IEEE Transactions on Image Processing, 22(9):3497-3512 (2013)',
              ]}
            />
          </div>
          <div className={classes.root} id="LowComplexityVideoCoding">
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography type="headline" component="h3" gutterBottom>
                  Low Complexity Video Coding
                </Typography>
                <Divider light className={classes.dividerMarginBottom} />
              </Grid>
            </Grid>
            <ResearchTile
              imageSrc={OptimalStopping}
              imageAlt={'Sam - Department of Computer Science'}
              title={'Optimal Stopping Theory based Fast Algorithm'}
              publications={[
                'Tiesong Zhao, Zhou Wang, Sam Kwong, Flexible Mode Selection and Complexity Allocation in High Efficiency Video Coding. J. Sel. Topics Signal Processing (JSTSP) 7(6):1135-1144 (2013)',
                'Tiesong Zhao, Sam Kwong, Hanli Wang, Zhou Wang, Zhaoqing Pan, C.-C. Jay Kuo, Multiview Coding Mode Decision With Hybrid Optimal Stopping Model, IEEE Transactions on Image Processing, 22(4):1598-1609 (2013)',
                'Tiesong Zhao, Sam Kwong, Hanli Wang, C.-C. Jay Kuo, H.264/SVC Mode Decision Based on Optimal Stopping Theory, IEEE Transactions on Image Processing, 21(5):2607-2618 (2012)',
              ]}
            />
            <ResearchTile
              imageSrc={statModelBasedFastAlgorithm}
              imageAlt={'Sam - Department of Computer Science'}
              title={'Statistical Model based Fast Algorithm'}
              publications={[
                'Zhaoqing Pan, Sam Kwong, Ming-Ting Sun, Jianjun Lei, Early MERGE Mode Decision Based on Motion Estimation and Hierarchical Depth Correlation for HEVC, IEEE Transactions on Broadcasting, 60(2):405-412 (2014)',
                'Yun Zhang, Sam Kwong, Long Xu, Gangyi Jiang, DIRECT Mode Early Decision Optimization Based on Rate Distortion Cost Property and Inter-view Correlation, IEEE Transactions on Broadcasting, 59(2): 390-398 (2013)',
                'Yun Zhang, Sam Kwong, Gangyi Jiang, Xu Wang, Mei Yu, Statistical Early Termination Model for Fast Mode Decision and Reference Frame Selection in Multiview Video Coding, IEEE Transactions on Broadcasting,  58(1):10-23 (2012)',
                'Yun Zhang, Sam Kwong, Gangyi Jiang, Hanli Wang, Efficient Multi-Reference Frame Selection Algorithm for Hierarchical B Pictures in Multiview Video Coding, IEEE Transactions on Broadcasting, 57(1):15-23 (2011)',
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ResearchMachineLearning);
