import {FC} from 'react';
import {Button} from '@mui/material';

import Logo from '../../../assets/icons/Header/Header.icons/logo.png';
import {useActions} from '../../../hooks/useActions';

import {ButtonsStyled, HeaderStyled, LogoStyled} from './Header.styles';

const Header: FC = () => {
  const {authLogout} = useActions();

  return (
    <HeaderStyled>
      <LogoStyled src={Logo} alt="header-logo"/>
      <ButtonsStyled>
        <Button onClick={authLogout} variant="outlined">Выйти</Button>
      </ButtonsStyled>
    </HeaderStyled>
  );
};

export default Header;
