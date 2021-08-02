import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import Routes from 'base/routes/components/Routes';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Loader from 'components/UI/Loader';
import { routes } from 'screens/routes';

const App: React.FC = observer(() => {
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => {
    // Demo: waiting get user data
    setTimeout(() => {
      setProfileLoading(false);
    }, 400);
  }, []);

  if (profileLoading) {
    return <Loader minHeight="100vh" />;
  }

  return (
    <>
      <Header />

      <Routes routes={routes} />

      <Footer />
      <ReactNotification />
    </>
  );
});

export default App;
