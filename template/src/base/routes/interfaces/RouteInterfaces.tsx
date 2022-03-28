import { RouteProps } from 'react-router-dom';

import { Param } from '../types/RouteTypes';

// Roles
export interface IRole {
  role: string;
  label: string;
}

// Routes
export interface IRoute extends RouteProps {
  path: string;
  title: string;
  credentials?: IRole[];
  props?: any;
}

export interface IRoutes {
  [key: string]: IRoute;
}

// Params types
export interface ParamObj {
  p: string;
  v: Param;
}
