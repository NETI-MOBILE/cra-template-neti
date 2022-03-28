import Footer from 'components/Footer';
import Header from 'components/Header';

interface IBaseLayoutProps {}

const BaseLayout: React.FC<IBaseLayoutProps> = props => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default BaseLayout;
