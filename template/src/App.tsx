import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { authRotes, routes } from 'routes/routes';

import { useRootStore } from 'base/hooks/useRootStore';
import Routes from 'base/routes/components/Routes';
import BaseLayout from 'components/Layouts/BaseLayout';
import Loader from 'components/UI/Loader';

const App: React.FC = observer(() => {
  const { authStore } = useRootStore();

  // Effects
  useEffect(() => {
    authStore.checkAuth();
  }, []);

  // Renders
  const renderIsAuthStack = () => {
    return (
      <>
        <BaseLayout>
          <Routes routes={routes} />
        </BaseLayout>

        <ReactNotifications />
      </>
    );
  };

  const renderIsNotAuthStack = () => {
    return (
      <>
        <Routes redirectProps={{ to: authRotes.LoginScreen.path }} routes={authRotes} />

        <ReactNotifications />
      </>
    );
  };

  // Main loader
  if (!authStore.completeCheckAuth) {
    return <Loader minHeight="100vh" />;
  }

  // TODO: Check
  return !authStore.isAuth ? renderIsAuthStack() : renderIsNotAuthStack();
});

export default App;
