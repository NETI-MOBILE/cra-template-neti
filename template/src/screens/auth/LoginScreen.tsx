import { Typography } from '@material-ui/core';

import LoginCard from './components/LoginCard';

interface ILoginScreenProps {}

const LoginScreen: React.FC<ILoginScreenProps> = () => {
  return (
    <LoginCard>
      <Typography variant="h1">LoginScreen</Typography>
    </LoginCard>
  );
};

export default LoginScreen;
