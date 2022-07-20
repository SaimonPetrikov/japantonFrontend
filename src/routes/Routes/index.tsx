import { Routes, Route, Navigate } from 'react-router-dom';

import {privateRoutes, publicRoutes} from '../index';
import {useTypedSelector} from '../../hooks/useTypedSelector';

import {RouteNames} from './Routes.enum';


const AppRouter = () => {
  const {isAuth} = useTypedSelector(state => state.auth);

  return (
    isAuth ?
      <Routes>
        {privateRoutes.map(route =>
          <Route path={route.path}
            element={<route.element/>}
            key={route.path}
          />
        )}
        <Route path={'*'} element={<Navigate replace to={RouteNames.HOME} />} />
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
