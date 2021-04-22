import { RouteProps } from 'react-router-dom';

import roles from '../roles';

// Roles
export interface IRole {
  role: string;
  label: string;
}
export type RoleKeys = keyof typeof roles;
export type Roles = Record<RoleKeys, IRole>;

// Routes
export type RoutesType<T extends string> = Record<T, IRoute>;
export interface IRoute extends RouteProps {
  path: string;
  title: string;
  credentials?: IRole[];
  props?: any;
}
