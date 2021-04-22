import { Switch, Route, Redirect } from 'react-router-dom';

import PageTitle from './PageTitle';
import { IRole, IRoute, RoleKeys } from '../types/RouteTypes';

interface IRoutes {
  [key: string]: IRoute;
}

interface IRoutesProps {
  routes: IRoutes;
  role?: RoleKeys;
  disableRedirect?: boolean;
}

// Check roles
const isSatisfied = (role: RoleKeys, credentials: IRole[]): boolean => {
  const mappedCredentials = credentials.map(credential => credential.role);

  return mappedCredentials.includes(role);
};

const Routes: React.FC<IRoutesProps> = ({ routes, role, disableRedirect }) => {
  const routesArray = Object.values(routes);

  const renderRouteChildren = (route: IRoute) => {
    const { credentials, title, component: Component, props } = route;

    const renderRouteComponent = () => {
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

    if (role && credentials) {
      if (isSatisfied(role, credentials)) {
        return renderRouteComponent();
      }
    } else {
      return renderRouteComponent();
    }

    return <Redirect to={routes.NotFoundScreen.path} />;
  };

  return (
    <main>
      <Switch>
        {routesArray.map(route => {
          const { component, path, title, credentials, props, ...rest } = route;

          return (
            <Route key={path} path={path} {...rest}>
              {renderRouteChildren(route)}
            </Route>
          );
        })}

        {!disableRedirect && (
          <Route path="*">
            <Redirect to={routes.NotFoundScreen.path} />
          </Route>
        )}
      </Switch>
    </main>
  );
};

export default Routes;
