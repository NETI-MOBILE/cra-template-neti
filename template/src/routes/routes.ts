import { RoutesType } from 'base/routes/types/RouteTypes';
import LoginScreen from 'screens/auth/LoginScreen';
import MainScreen from 'screens/main/MainScreen';
import NotFoundScreen from 'screens/not-found/NotFoundScreen';

const screens = { MainScreen, NotFoundScreen };
const authScreens = { LoginScreen, NotFoundScreen };

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

// Auth Routes
type AuthRouteKeys = keyof typeof authScreens;
export const authRotes: RoutesType<AuthRouteKeys> = {
  LoginScreen: {
    path: '/login',
    exact: true,
    title: 'Вход',
    component: authScreens.LoginScreen,
  },

  NotFoundScreen: {
    path: '/not-found',
    title: '404 Страница не найдена',
    component: screens.NotFoundScreen,
  },
};
