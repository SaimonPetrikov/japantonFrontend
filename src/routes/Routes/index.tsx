import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

import {privateRoutes, publicRoutes} from '../index';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';

import {RouteNames} from './Routes.enum';


const AppRouter = () => {
  const router = useNavigate();
  const {isAuth, isSignup} = useTypedSelector(state => state.auth);
  const {carsAll} = useActions();

  useEffect(() => {
    if (isSignup) router(RouteNames.LOGIN);
  }, [isSignup]);

  useEffect(() => {
    if (isAuth) carsAll();
  }, [isAuth]);

  return (
    isAuth ?
      <Routes>
        {privateRoutes.map(route =>
          <Route path={route.path}
            element={<route.element/>}
            key={route.path}
          />
        )}
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
