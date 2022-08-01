import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import Search from '../../../components/Search';
import PagesLogo from '../../../assets/icons/Header/Header.icons/PagesLogo.png';
import {useActions} from '../../../hooks/useActions';
import {useTypedSelector} from '../../../hooks/useTypedSelector';
import {CarResponse, ICarProps} from '../../../store/action-creators/cars/cars.typings';

import {BalanceStyled, TopStyled} from './PagesHeader.styles';


const PagesHeader = () => {
  const {carCreate} = useActions();
  const {carAll} = useTypedSelector(state => state.car);

  const searchData = () => {
    if (!carAll) return [];
    const response = (carAll as CarResponse)?.car;
    return (response as ICarProps[]);
  };

  const createCar = {
    // eslint-disable-next-line camelcase
    manufacturer_id: 10,
    // eslint-disable-next-line camelcase
    model_id: 3,
    // eslint-disable-next-line camelcase
    body_id: 2,
    // eslint-disable-next-line camelcase
    engine_id: 2,
    // eslint-disable-next-line camelcase
    transmission_id: 1,
    mileage: 111,
    headlight: 'test',
    taillight: 'test',
    marriage: 'test',
    notes: 'test',
    // eslint-disable-next-line camelcase
    // eslint-disable-next-line camelcase
    notes_zibiz: 'test',
    images: 'test',
    videos: 'test',
    // eslint-disable-next-line camelcase
    user_id: 3,
    // eslint-disable-next-line camelcase
    body_no: 'test',
    // eslint-disable-next-line camelcase
    engine_no: 'test',
    // eslint-disable-next-line camelcase
    in_the_way: 2,
    retail: 2,
    small: 2,
    archive: 2,
    // eslint-disable-next-line camelcase
    sticker_notes: 'test11111@er.com',
    // eslint-disable-next-line camelcase
    manager_id: 2,
    documents: 'test',
    // eslint-disable-next-line camelcase
    provider_id: 4,
    // eslint-disable-next-line camelcase
    provider_engine_price: 1236
  };

  const handler = () => {
    carCreate(createCar);
  };

  return (
    <TopStyled>
      <Search payload={searchData()} />
      <Button sx={{padding: '0 30px', height: '40px', textTransform: 'none'}} onClick={handler} variant="contained" startIcon={<AddIcon />}>Добавить</Button>
      <BalanceStyled>
          1.000.000 $
      </BalanceStyled>
      <img src={PagesLogo} alt="Pages Header Logo"/>
    </TopStyled>

  );
};

export default PagesHeader;
