import {useEffect} from 'react';
import Cookies from 'js-cookie';

import Layout from './layout';
import AppRouter from './routes/Routes';
import {useActions} from './hooks/useActions';

const App = () => {
  const {authCheck} = useActions();

  useEffect(() => {
    if (Cookies.get('token')) {
      authCheck();
    }
  }, []);

  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
};

export default App;
