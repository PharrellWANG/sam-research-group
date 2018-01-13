
/* eslint-disable jsx-a11y/accessible-emoji,react/prop-types */
import React from 'react';
import withStyles from 'material-ui/es/styles/withStyles';
import Typography from 'material-ui/es/Typography/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';


const styles = (theme) => ({
  root: theme.mixins.gutters({
    padding: 32,
    marginTop: theme.spacing.unit * 3,
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
});

export class ResearchTile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes, imageSrc, imageAlt, title, publications } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <Paper className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <div className={classes.indentRow}>
              <Typography type="body2" gutterBottom>
                {bull}
              </Typography>
              <Typography type="title" color="primary" gutterBottom>
                {title}
                <br />
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={4}>
            <img className={classes.imageAutoScale} src={imageSrc} alt={imageAlt} />
          </Grid>
          <Grid item xs={12} sm={8}>
            {publications.map((name, index) => (<div className={classes.indentRow} key={name}>
              <Typography type="body1" gutterBottom>
                {index + 1}.&nbsp;&nbsp;
              </Typography>
              <Typography type="body1" gutterBottom>
                {name}
                <br />
              </Typography>
            </div>))}
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(ResearchTile);
