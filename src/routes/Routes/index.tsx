import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

import {privateRoutes, publicRoutes} from '../index';
import {useTypedSelector} from '../../hooks/useTypedSelector';

import {RouteNames} from './Routes.enum';


const AppRouter = () => {
  const {isAuth, isSignup} = useTypedSelector(state => state.auth);
  const router = useNavigate();

  useEffect(() => {
    if (isSignup) router(RouteNames.LOGIN);
  }, [isSignup]);

  return (
    isAuth ?
      <Routes>
        {privateRoutes.map(route => {
          // eslint-disable-next-line max-len
          if (route.path === RouteNames.CARS_SHOW || route.path === RouteNames.CARS_UPDATE) {
            return <Route path={`${route.path}/:id`}
              element={<route.element/>}
              key={route.path}
            />;
          } else if (route.path === RouteNames.CARS_PARTS_UPDATE) {
            return <Route path={`${route.path}/:id`}
              element={<route.element/>}
              key={route.path}
            />;
          } else {
            return <Route path={route.path}
              element={<route.element/>}
              key={route.path}
            />;
          }
        })}
        <Route path={'*'} element={<Navigate replace to={RouteNames.CARS_ACTIVE} />} />
      </Routes>      :
      <Routes>
        {publicRoutes.map(route =>
          <Route path={route.path}
            element={<route.element/>}
            key={route.path}
          />
        )}
        <Route path={'*'} element={<Navigate replace to={RouteNames.LOGIN} />} />
      </Routes>
  );
};

export default AppRouter;
