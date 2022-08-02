import {FC} from 'react';
import Cookies from 'js-cookie';

import {useTypedSelector} from '../hooks/useTypedSelector';

import {
  BodyStyled,
  ChildrenStyled,
  HeaderStyled,
  LayoutStyled, PagesBodyStyled, PagesHeaderStyled, PublicStyled,
  SidebarStyled
} from './Layout.styles';
import {ILayoutProps} from './Layout.typings';
import Header from './elements/Header';
import Sidebar from './elements/Sidebar';
import PagesHeader from './elements/PagesHeader';

const Layout: FC<ILayoutProps> = ({children}) => {
  const {isAuth, loading, } = useTypedSelector(state => state.auth);

  return (
    (Cookies.get('token') && loading) ? <h1>Загрузка...</h1> :
      <LayoutStyled>
        {isAuth &&
            <HeaderStyled>
              <Header />
            </HeaderStyled>
        }
        <BodyStyled>
          {isAuth ?
            <ChildrenStyled>
              <SidebarStyled>
                <Sidebar />
              </SidebarStyled>
              <PagesHeaderStyled>
                <PagesHeader />
              </PagesHeaderStyled>
              <PagesBodyStyled>
                {children}
              </PagesBodyStyled>
            </ChildrenStyled>          :
            <PublicStyled>{children}</PublicStyled>
          }
        </BodyStyled>
      </LayoutStyled>

  );
};

export default Layout;
