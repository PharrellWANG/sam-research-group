
/* eslint-disable jsx-a11y/accessible-emoji,react/prop-types */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import Card, { CardContent } from 'material-ui/Card';
// import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';

import Typography from 'material-ui/Typography';


const styles = (theme) => ({
  root: theme.mixins.gutters({
    padding: 32,
    marginBottom: theme.spacing.unit,
  }),
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
  imageAutoScale: {
    maxWidth: '100%',
    height: 'auto',
    width: 'auto', /* ie8 */
    paddingBottom: 16,
  },
  card: {
    // width: 285,
    // maxWidth: 285,
    [theme.breakpoints.down('sm')]: {
      width: 348,
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 980,
    },
    // height: 380,
    paddingTop: 27,
  },
  media: {
    height: 150,
  },
  bigAvatar: {
    width: 90,
    height: 90,
  },
  avatarRow: {
    display: 'flex',
    justifyContent: 'center',
  },
  nameCardDivider: {
    marginTop: 12,
    marginBottom: 12,
  },
});

export class PhdCandidateNameCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  /**
   * The ``title`` prop is optional.
   */
  render() {
    const { classes, img, personName, personTitle11, personTitle12, personTitle13, personTitle14, personTitle2, personTitle3, personTitle4, interests, email } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <div className={classes.avatarRow}>
            <Avatar
              alt="Adelle Charles"
              src={img}
              className={classes.bigAvatar}
            />
          </div>
          <CardContent>
            <div className={classes.avatarRow}>
              <Typography type="headline" component="h2">
                {personName}
              </Typography>
            </div>
            <div className={classes.avatarRow}>
              <Typography type="caption" component="h2">
                {personTitle11}
              </Typography>
            </div>
            <div className={classes.avatarRow}>
              <Typography type="caption" component="h2">
                {personTitle12}
              </Typography>
            </div>
            <div className={classes.avatarRow}>
              <Typography type="caption" component="h2">
                {personTitle13}
              </Typography>
            </div>
            <div className={classes.avatarRow}>
              <Typography type="caption" component="h2">
                {personTitle14}
              </Typography>
            </div>
            <div className={classes.avatarRow}>
              <Typography type="caption" component="h2">
                {personTitle2}
              </Typography>
            </div>
            <div className={classes.avatarRow}>
              <Typography type="caption" component="h2">
                {personTitle3}
              </Typography>
            </div>
            <div className={classes.avatarRow}>
              <Typography type="caption" component="h2">
                {personTitle4}
              </Typography>
            </div>
            <Divider light className={classes.nameCardDivider} />
            <div>
              <Typography type="body2">
                Research Interests
              </Typography>
              <Typography type="body1" gutterBottom>
                {interests}
              </Typography>
              <Typography type="body2">
                Email
              </Typography>
              <Typography color="primary" component="a" href={`mailto:${email}`} >
                {email}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(PhdCandidateNameCard);
