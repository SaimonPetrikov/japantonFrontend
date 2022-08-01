import {FC} from 'react';

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
  const {isAuth} = useTypedSelector(state => state.auth);

  return (
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
