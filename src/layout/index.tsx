import {FC} from 'react';

import {useTypedSelector} from '../hooks/useTypedSelector';

import {ChildrenStyled, HeaderStyled, LayoutStyled} from './Layout.styles';
import {ILayoutProps} from './Layout.typings';
import Header from './elements/Header';

const Layout: FC<ILayoutProps> = ({children}) => {
  const {isAuth} = useTypedSelector(state => state.auth);

  return (
    <>
      {isAuth && <HeaderStyled>
        <Header />
      </HeaderStyled>}
      <LayoutStyled>
        <ChildrenStyled>
          {children}
        </ChildrenStyled>
      </LayoutStyled>
    </>
  );
};

export default Layout;
