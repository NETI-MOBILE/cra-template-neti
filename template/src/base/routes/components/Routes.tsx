import { Switch, Route, Redirect, RedirectProps } from 'react-router-dom';

import RouteHelper from '../helpers/RouteHelper';
import { IRoutes, IRoute } from '../interfaces/RouteInterfaces';
import { RoleKeys } from '../types/RouteTypes';
import PageTitle from './PageTitle';

interface IRoutesProps {
  routes: IRoutes;
  role?: RoleKeys;
  disableRedirect?: boolean;
  redirectProps?: { to: RedirectProps['to'] };
}

const Routes: React.FC<IRoutesProps> = ({ routes, role, disableRedirect, redirectProps }) => {
  const routesList = RouteHelper.getRoutesWithCheckedRoles(routes, role);

  const renderRouteChildren = (route: IRoute) => {
    const { title, component: Component, props } = route;

    if (Component) {
      return (
        <>
          <PageTitle pageTitle={title} />
          <Component {...props} />
        </>
      );
    }

    return <></>;
  };

  return (
    <main>
      <Switch>
        {routesList.map(route => {
          const { component, path, ...rest } = route;

          return <Route key={path} path={path} render={() => renderRouteChildren(route)} {...rest} />;
        })}

        {!disableRedirect && (
          <Route path="*">
            <Redirect to={redirectProps ? redirectProps.to : routes.NotFoundScreen.path} />
          </Route>
        )}
      </Switch>
    </main>
  );
};

export default Routes;
