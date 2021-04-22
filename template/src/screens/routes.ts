import { RoutesType } from '../base/routes/types/RouteTypes';
import MainScreen from './main/MainScreen';
import NotFoundScreen from './not-found/NotFoundScreen';

const screens = { MainScreen, NotFoundScreen };

type RoutesKeys = keyof typeof screens;
export const routes: RoutesType<RoutesKeys> = {
  MainScreen: {
    path: '/',
    exact: true,
    title: 'Главная',
    component: screens.MainScreen,
    // credentials: [roles.director],
  },
  NotFoundScreen: {
    path: '/not-found',
    title: '404 Страница не найдена',
    component: screens.NotFoundScreen,
  },
};
