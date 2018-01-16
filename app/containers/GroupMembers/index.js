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
import AlumniNameCard from 'components/NameCard/Alumni';
import wumengyuan from './img/WUMengyuanSince2014.jpg';
import wangxu from './img/wangxu.png';
import panzhaoqing from './img/panzhaoqing.jpg';
import jiayuheng from './img/jiayuheng.png';
import caojingjing from './img/caojingjing.png';
import zhangjia from './img/zhangjia.png';
import zhouyu from './img/zhouyu.png';
import zhangyun from './img/postdoc/zhangyun.png';
import yunhui from './img/postdoc/yunahui.jpg';
import gaohao from './img/postdoc/gaohao.jpg';
import wuwenhui from './img/wuwenhui.png';
import zhangjiao from './img/zhangjiao.png';
import gaowei from './img/gaowei.jpg';
import like from './img/like.png';
import xulong from './img/postdoc/xulong.png';
import zhaotiesong from './img/zhaotiesong.png';
import sududeng from './img/husudeng.jpg';
import wanghanli from './img/wanghanli.png';
import wangran from './img/wangran.png';
import zhulinwei from './img/zhulinwei.png';
import pak from './img/pak.jpg';
import caojingchao from './img/caojingchao.png';
import sam from './img/sam.jpg';
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
          <Grid container spacing={24} justify="center" style={{ marginBottom: 24 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              container
              alignItems="center"
              justify="center"
            >
              <DirectorNameCard
                img={sam}
                personName="Prof. KWONG, Tak Wu Sam"
                personTitle11="PhD Fernuniversitaet, Germany"
                personTitle12="MASc Waterloo"
                personTitle13="BSc SUNY Buffalo"
                personTitle14="FIEEE"
                personTitle2="Head & Professor"
                personTitle3="Department of Computer Science"
                personTitle4="City University of Hong Kong"
                interests="Evolutionary Algorithms, Video Coding, Pattern Recognition, Machine Learning"
                email="cssamk@cityu.edu.hk"
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
          <Grid container spacing={24} justify="center" style={{ marginBottom: 24 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
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
              md={6}
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
          </Grid>
          <Grid container spacing={24} justify="center" style={{ marginBottom: 24 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
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
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
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
          </Grid>
          <Grid container spacing={24} justify="center" style={{ marginBottom: 24 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
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
              md={6}
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
          <Grid container spacing={24} justify="center" style={{ marginBottom: 24 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
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
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography type="headline" component="h3" gutterBottom className={classes.sectionTitle}>
                  Postdoc Researcher (Since 2009)
                </Typography>
                <Divider light className={classes.dividerMarginBottom} />
              </Grid>
            </Grid>
          </div>
          <Grid container spacing={24} justify="center" style={{ marginBottom: 24 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              container
              alignItems="center"
              justify="center"
            >
              <AlumniNameCard
                // img, degree, personName, personPlace, personTitle, email, personalHomepage
                img={xulong}
                // degree="Ph.D 2017"
                personName="Dr.XU Long"
                personTitle="Professor"
                personPlace="National Astronomical Observatories, Chinese Academy of Sciences, China"
                email="lxu@nao.cas.cn"
                personalHomepage={false}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              container
              alignItems="center"
              justify="center"
            >
              <AlumniNameCard
                // img, degree, personName, personPlace, personTitle, email, personalHomepage
                img={zhangyun}
                personName="Dr.ZHANG Yun"
                personTitle="Associate Professor"
                personPlace="Shenzhen Institutes of Advanced Technology (SIAT), Chinese Academy of Sciences (CAS), China"
                email="yun.zhang@siat.ac.cn"
                personalHomepage="http://codec.siat.ac.cn/yunzhang/"
              />
            </Grid>
          </Grid>
          <Grid container spacing={24} justify="center" style={{ marginBottom: 24 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              container
              alignItems="center"
              justify="center"
            >
              <AlumniNameCard
                // img, degree, personName, personPlace, personTitle, email, personalHomepage
                img={yunhui}
                // degree="Ph.D 2017"
                personName="Dr.YUAN Hui"
                personTitle="Associate Professor"
                personPlace="School of Information Science and Engineering, Shandong University, China"
                email="yuanhui0325@gmail.com"
                personalHomepage={false}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              container
              alignItems="center"
              justify="center"
            >
              <AlumniNameCard
                // img, degree, personName, personPlace, personTitle, email, personalHomepage
                img={gaohao}
                personName="Dr.GAO Hao"
                personTitle="Associate Professor"
                personPlace="School of Automation, Nanjing University of Posts and Telecommunications, Nanjing, China"
                email="tsgaohao@gmail.com"
                personalHomepage="http://yjs.njupt.edu.cn/epstar/web/outer/dsfc_ny_.jsp?dsgh=20110085"
              />
            </Grid>
          </Grid>
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography type="headline" component="h3" gutterBottom className={classes.sectionTitle}>
                  Alumni
                </Typography>
                <Divider light className={classes.dividerMarginBottom} />
              </Grid>
            </Grid>
          </div>
          <Grid container spacing={24} justify="center" style={{ marginBottom: 24 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              container
              alignItems="center"
              justify="center"
            >
              <AlumniNameCard
                // img, degree, personName, personPlace, personTitle, email, personalHomepage
                img={zhouyu}
                degree="Ph.D 2017"
                personName="Dr.ZHOU Yu"
                personTitle="Assistant Professor"
                personPlace="College of Computer Science and Software Engineering, Shenzhen University, China"
                email="zhouyu_1022@126.com"
                personalHomepage={false}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              container
              alignItems="center"
              justify="center"
            >
              <AlumniNameCard
                // img, degree, personName, personPlace, personTitle, email, personalHomepage
                img={gaowei}
                personName="Dr. GAO Wei"
                degree="Ph.D 2016"
                personTitle="Postdoctoral Fellow"
                personPlace="School of Electrical and Electronic Engineering,  Nanyang Technological University, Singapore"
                email="gaowei262@163.com"
                personalHomepage="http://www.escience.cn/people/weigao/index.html"
              />
            </Grid>
          </Grid>
          <Grid container spacing={24} justify="center" style={{ marginBottom: 24 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              container
              alignItems="center"
              justify="center"
            >
              <AlumniNameCard
                // img, degree, personName, personPlace, personTitle, email, personalHomepage
                img={pak}
                degree="Ph.D 2016"
                personName="Dr.Tariq Juniad"
                personTitle="Assistant Professor"
                personPlace="Computer Science and Engineering Department, HITEC University, Pakistan"
                email="junaid.tariq@hitecuni.edu.pk"
                personalHomepage={false}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              container
              alignItems="center"
              justify="center"
            >
              <AlumniNameCard
                // img, degree, personName, personPlace, personTitle, email, personalHomepage
                img={wangxu}
                personName="Dr.WANG Xu"
                degree="Ph.D 2014"
                personTitle="Assistant Professor"
                personPlace="Research Institute of Future Media Computing, Shenzhen University, China"
                email="wangxu@szu.edu.cn"
                personalHomepage="http://futuremedia.szu.edu.cn/peopleXuWang.aspx"
              />
            </Grid>
          </Grid>
          <Grid container spacing={24} justify="center" style={{ marginBottom: 24 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              container
              alignItems="center"
              justify="center"
            >
              <AlumniNameCard
                // img, degree, personName, personPlace, personTitle, email, personalHomepage
                img={like}
                personName="Dr.LI Ke"
                degree="Ph.D 2014"
                personTitle="Assistant Professor"
                personPlace="College of Engineering, Mathematics and Physical Sciences, University of Exeter, UK"
                email="k.li@exeter.ac.uk"
                personalHomepage="http://www.cs.bham.ac.uk/~likw/"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              container
              alignItems="center"
              justify="center"
            >
              <AlumniNameCard
                // img, degree, personName, personPlace, personTitle, email, personalHomepage
                img={wangran}
                personName="Dr.WANG Ran"
                degree="Ph.D 2014"
                personTitle="Assistant Professor"
                personPlace="College of Mathematics and Statistics, Shenzhen University, China"
                email="wangran@szu.edu.cn"
                personalHomepage={false}
              />
            </Grid>
          </Grid>
          <Grid container spacing={24} justify="center" style={{ marginBottom: 24 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              container
              alignItems="center"
              justify="center"
            >
              <AlumniNameCard
                // img, degree, personName, personPlace, personTitle, email, personalHomepage
                img={caojingjing}
                personName="Dr.CAO Jingjing"
                degree="Ph.D 2012"
                personTitle="Lecturer"
                personPlace="School of Logistics Engineering, Wuhan University of Technology, Wuhan, China"
                email="bettymoore@126.com"
                personalHomepage={false}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              container
              alignItems="center"
              justify="center"
            >
              <AlumniNameCard
                // img, degree, personName, personPlace, personTitle, email, personalHomepage
                img={panzhaoqing}
                personName="Dr.PAN Zhaoqing"
                degree="Ph.D 2014"
                personTitle="Professor"
                personPlace="School of Computer and Software, Nanjing University of Information Science and Technology, Nanjing, China"
                email="zhaoqingpan@nuist.edu.cn"
                personalHomepage="http://multimedia-nuist.atwebpages.com"
              />
            </Grid>
          </Grid>
          <Grid container spacing={24} justify="center" style={{ marginBottom: 24 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              container
              alignItems="center"
              justify="center"
            >
              <AlumniNameCard
                // img, degree, personName, personPlace, personTitle, email, personalHomepage
                img={sududeng}
                personName="Mr.HU Sudeng "
                degree="MPhil 2010"
                personTitle="Software Engineer"
                personPlace="Apple, Cupertino, California, USA"
                email="sudenghu@gmail.com"
                personalHomepage={false}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              container
              alignItems="center"
              justify="center"
            >
              <AlumniNameCard
                // img, degree, personName, personPlace, personTitle, email, personalHomepage
                img={zhaotiesong}
                personName="Dr.ZHAO Tiesong"
                degree="Ph.D 2011"
                personTitle="Professor"
                personPlace="College of Physics and Information Engineering,  Fuzhou University, Fuzhou, China"
                email="t.zhao@fzu.edu.cn"
                personalHomepage={false}
              />
            </Grid>
          </Grid>
          <Grid container spacing={24} justify="center" style={{ marginBottom: 24 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              container
              alignItems="center"
              justify="center"
            >
              <AlumniNameCard
                // img, degree, personName, personPlace, personTitle, email, personalHomepage
                img={wanghanli}
                personName="Dr.WANG Hanli"
                degree="Ph.D 2007"
                personTitle="Professor"
                personPlace="Department of Computer Science and Technology, Tongji University, Shanghai, China"
                email="hanliwang@tongji.edu.cn"
                personalHomepage={false}
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
