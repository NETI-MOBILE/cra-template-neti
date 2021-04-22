import { Helmet } from 'react-helmet';

import { appConfig } from '../../../appConfig';
import { Nullable } from '../../types/BaseTypes';

interface IPageTitleProps {
  pageTitle: Nullable<string>;
  siteName?: string;
}

const PageTitle: React.FC<IPageTitleProps> = ({ pageTitle, siteName = appConfig.siteName }) => {
  if (pageTitle) {
    return (
      <Helmet>
        <title>
          {pageTitle}
          {siteName && ` | ${siteName}`}
        </title>
      </Helmet>
    );
  }

  return <></>;
};

export default PageTitle;
