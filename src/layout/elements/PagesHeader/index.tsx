import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {useLocation, useNavigate} from 'react-router-dom';

import Search from '../../../components/Search';
import PagesLogo from '../../../assets/icons/Header/Header.icons/PagesLogo.png';
import {RouteNames} from '../../../routes/Routes/Routes.enum';

import {BalanceStyled, TopStyled} from './PagesHeader.styles';

const PagesHeader = () => {
  const router = useNavigate();
  const { pathname } = useLocation();

  const crateHandler = () => {
    switch (pathname) {
    case RouteNames.CARS_ACTIVE:
      router(RouteNames.CARS_CREATE);
      break;
    case RouteNames.CARS_PARTS:
      router(RouteNames.CARS_PARTS_CREATE);
      break;
    case RouteNames.CARS_PARTS_ITEM:
      router(RouteNames.CARS_PARTS_ITEM_CREATE);
      break;
    case RouteNames.CARS_PROVIDERS:
      router(RouteNames.CARS_PROVIDERS_CREATE);
      break;
    default:
      return;
    }
  };

  return (
    <TopStyled>
      <Search name={'Введите что Вам нужно'} width={'100%'} />
      <Button sx={{padding: '0 30px', height: '40px', textTransform: 'none'}} onClick={crateHandler} variant="contained" startIcon={<AddIcon />}>Добавить</Button>
      <BalanceStyled>
          1.000.000 $
      </BalanceStyled>
      <img src={PagesLogo} alt="Pages Header Logo"/>
    </TopStyled>

  );
};

export default PagesHeader;
