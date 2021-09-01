import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import { useRootStore } from 'base/hooks/useRootStore';
import Routes from 'base/routes/components/Routes';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Loader from 'components/UI/Loader';
import { routes } from 'screens/routes';

const App: React.FC = observer(() => {
  const { authStore } = useRootStore();

  // Effects
  useEffect(() => {
    authStore.checkAuth();
  }, [authStore]);

  // Renders
  // Main loader
  if (!authStore.completeCheckAuth) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Routes routes={routes} />
      <Footer />

      <ReactNotification />
    </>
  );

  // const renderIsAuthStack = () => {
  //   // render app routes
  // };

  // const renderIsNotAuthStack = () => {
  //   // render app auth routes
  // };

  // return authStore.isAuth ? renderIsAuthStack() : renderIsNotAuthStack();
});

export default App;
