import {FC} from 'react';
import {Button} from '@mui/material';

import Logo from '../../../assets/logo.png';
import {ButtonsStyled} from '../../Layout.styles';
import {useActions} from '../../../hooks/useActions';

import {HeaderStyled, LogoStyled} from './Header.styles';

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
