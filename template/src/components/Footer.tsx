import { Box, Container, makeStyles, Typography, Theme } from '@material-ui/core';

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container maxWidth="xl">
        <Box py={3} minHeight={60}>
          <Typography>Footer</Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(10),
    backgroundColor: theme.palette.divider,
  },
}));
