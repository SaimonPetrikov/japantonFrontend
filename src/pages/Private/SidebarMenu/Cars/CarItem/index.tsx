import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

import {useTypedSelector} from '../../../../../hooks/useTypedSelector';
import HeaderPage from '../../../../../ui/HeaderPage';
import {useActions} from '../../../../../hooks/useActions';
import {RouteNames} from '../../../../../routes/Routes/Routes.enum';
import {CarResponse, ICarProps} from '../../../../../store/action-creators/cars/cars.typings';
import {updateHeaders} from '../../../../../assets/helpers/Cars/CarsUpdate.helpers';

import {BtnsStyled, CarItemsStyled} from './CarItem.styles';

const CarItem = () => {
  const {payload, loading} = useTypedSelector(state => state.car);
  const response = (payload as CarResponse).car;
  const data = (response as ICarProps);
  const {carDelete} = useActions();
  const router = useNavigate();

  const editHandler = () => router(`${RouteNames.CARS_UPDATE}/${data?.id}`);

  const deleteHandler = () => {
    if (!payload) return;
    carDelete(data?.id);
    router(RouteNames.CARS_ACTIVE);
  };

  const setCurrVal = val => {
    switch (val) {
    case 'Кузов и №':
      return data?.body_no;
    case 'Двигатель':
      return data?.engine_no;
    case 'Пробег':
      return data?.in_the_way;
    case 'Наименование':
      return data?.notes;
    case 'Менеджер':
      return data?.notes_zibiz;
    case 'Поставщик':
      return data?.taillight;
    case 'Трансмиссия':
      return data?.marriage;
    default:
      return;
    }
  };

  return (
    loading ? <h1>Загрузка...</h1> :
      <>
        <HeaderPage>Активные / Car_id: {data?.id}</HeaderPage>
        <CarItemsStyled>
          {updateHeaders.map(elem => (
            <TextField
              label={elem}
              id={elem}
              size="small"
              key={elem}
              value={setCurrVal(elem)}
              InputProps={{
                readOnly: true,
              }}
            />
          ))}
        </CarItemsStyled>
        <BtnsStyled>
          <Button onClick={editHandler} variant="contained" sx={{textTransform: 'none'}}>Редактировать</Button>
          <Button onClick={deleteHandler} variant="contained" sx={{textTransform: 'none'}}>Удалить</Button>
        </BtnsStyled>
      </>
  );
};

export default CarItem;
