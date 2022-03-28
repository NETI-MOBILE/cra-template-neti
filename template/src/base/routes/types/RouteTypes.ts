import { IRole, IRoute } from '../interfaces/RouteInterfaces';
import { roles } from '../roles';

export type RoleKeys = keyof typeof roles;
export type Roles = Record<RoleKeys, IRole>;
export type RoutesType<T extends string> = Record<T, IRoute>;

// Params types
export type Param = string | number;
