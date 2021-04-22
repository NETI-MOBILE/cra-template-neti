import { Box, CircularProgress, Grid, makeStyles, useTheme } from '@material-ui/core';

interface ILoaderProps {
  size?: number;
  minHeight?: string | number;
  isAbsolute?: boolean;
  color?: string;
}

const Loader: React.FC<ILoaderProps> = ({ size = 40, minHeight = 0, isAbsolute = false, color }) => {
  const classes = useStyles();
  const { palette } = useTheme();

  const rendeLoader = () => {
    return (
      <Grid container justify="center" alignItems="center">
        <Box display="flex" color={color || palette.primary.main}>
          <CircularProgress size={size} color="inherit" />
        </Box>
      </Grid>
    );
  };

  if (isAbsolute) {
    return (
      <Box className={classes.isAbsolute} minHeight={minHeight}>
        <div className={classes.overline}></div>

        {rendeLoader()}
      </Box>
    );
  }

  return (
    <Box className={classes.root} minHeight={minHeight}>
      {rendeLoader()}
    </Box>
  );
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexBasis: '100%',
  },
  isAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  overline: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255, .7)',
    zIndex: -1,
  },
});

export default Loader;
