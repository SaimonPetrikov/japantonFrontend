import Login from '../pages/Login';
import Signup from '../pages/Signup';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

import {IRouteProps} from './Routes/Routes.typings';
import {RouteNames} from './Routes/Routes.enum';


export const publicRoutes: IRouteProps[] = [
  {path: RouteNames.LOGIN, element: Login},
  {path: RouteNames.SIGNUP, element: Signup},
  {path: RouteNames.NOT_FOUND, element: NotFound}
];

export const privateRoutes: IRouteProps[] = [
  {path: RouteNames.HOME, element: Home},
  {path: RouteNames.PROFILE, element: Profile},
  {path: RouteNames.NOT_FOUND, element: NotFound}
];
