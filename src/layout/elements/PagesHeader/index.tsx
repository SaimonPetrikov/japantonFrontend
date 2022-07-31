import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import Search from '../../../components/Search';
import PagesLogo from '../../../assets/icons/Header/Header.icons/PagesLogo.png';

import { TopStyled, BalanceStyled } from './PagesHeader.styles';

const PagesHeader = () => {
  return (
    <TopStyled>
      <Search payload={['test1', 'test2', 'test3', 'test4', 'test5']} />
      <Button sx={{padding: '0 30px', height: '40px', textTransform: 'none'}} onClick={() => console.log('add')} variant="contained" startIcon={<AddIcon />}>Добавить</Button>
      <BalanceStyled>
          1.000.000 $
      </BalanceStyled>
      <img src={PagesLogo} alt="Pages Header Logo"/>
    </TopStyled>

  );
};

export default PagesHeader;
