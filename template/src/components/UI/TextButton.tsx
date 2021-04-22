import clsx from 'clsx';
import { makeStyles, Button, ButtonProps, Theme } from '@material-ui/core';

interface ITextButtonProps extends ButtonProps {
  lowercase?: boolean;
}

const TextButton: React.FC<ITextButtonProps> = ({ lowercase, children, className, ...rest }) => {
  const classes = useStyles();

  return (
    <Button variant="text" disableRipple {...rest} className={clsx(className, lowercase ? classes.lowercase : '')}>
      {children}
    </Button>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  lowercase: {
    textTransform: 'none',
    letterSpacing: 0,
    fontWeight: 400,
  },
}));

export default TextButton;
