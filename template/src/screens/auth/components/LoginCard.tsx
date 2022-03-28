import { makeStyles, Theme } from '@material-ui/core';

interface ILoginCardProps {}

const LoginCard: React.FC<ILoginCardProps> = props => {
  const classes = useStyles();

  return (
    <div className={classes.containerWrap}>
      <div className={classes.container}>
        <div className={classes.innerWrap}>
          <div className={classes.inner}>
            <div className={classes.cardWrap}>{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  containerWrap: {
    position: 'fixed',
    inset: 0,
    zIndex: 2,
  },
  container: {
    height: '100%',
    textAlign: 'center',
    overflowX: 'hidden',
    overflowY: 'auto',
    '&::after': {
      content: '""',
      width: '0',
      height: '100%',
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  },
  innerWrap: {
    maxWidth: 700,
    margin: '32px',
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '100%',
    textAlign: 'left',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'calc(100% - 32px)',
      margin: '32px auto',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: 'calc(100% - 16px)',
    },
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardWrap: {
    position: 'relative',
    padding: theme.spacing(4, 6),
    borderRadius: 3,
    width: '100%',
    minHeight: 284,
    '&:after': {
      content: '""',
      position: 'absolute',
      top: -1,
      left: '50%',
      width: 'calc(100% + 2px)',
      height: 10,
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
      transform: 'translateX(-50%)',
    },
  },
  logoWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    width: '100%',
    maxWidth: 186,
    marginBottom: theme.spacing(6),
  },
}));

export default LoginCard;
