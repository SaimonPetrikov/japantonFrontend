import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {ChangeEvent, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {useTypedSelector} from '../../../../../hooks/useTypedSelector';
import HeaderPage from '../../../../../ui/HeaderPage';
import {useActions} from '../../../../../hooks/useActions';
import {RouteNames} from '../../../../../routes/Routes/Routes.enum';
import {CarResponse, ICarProps} from '../../../../../store/action-creators/cars/cars.typings';

import {BtnsStyled, CarItemsStyled} from './CarItem.styles';

const CarItem = () => {
  const {payload, loading} = useTypedSelector(state => state.car);
  const {carDelete, carUpdate} = useActions();
  const router = useNavigate();
  const response = (payload as CarResponse).car;
  const data = (response as ICarProps);

  const updateKeys = ['taillight', 'marriage', 'notes', 'notes_zibiz', 'images', 'videos', 'user_id', 'body_no', 'engine_no', 'in_the_way', 'retail', 'small', 'archive', 'sticker_notes', 'manager_id', 'documents', 'provider_id', 'provider_engine_price'];

  const initialUpdateObj = {
    id: 0,
    updateData: {
      taillight: 'test',
      marriage: 'test',
      notes: 'test',
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
    }
  };

  const [updateObj, setUpdateObj] = useState(initialUpdateObj);

  const updateHeaders = ['Наименование', 'Менеджер', 'Поставщик', 'Кузов и №', 'Двигатель', 'Трансмиссия', 'Пробег'];

  useEffect(() => {
    if (!data || !data.id) return;
    initialUpdateObj.id = data.id;
    updateKeys.map(elem => initialUpdateObj.updateData[elem] = data[elem]);
    setUpdateObj(initialUpdateObj);
  }, [data]);

  const setCurrVal = val => {
    switch (val) {
    case 'Кузов и №':
      return updateObj.updateData.body_no;
    case 'Двигатель':
      return updateObj.updateData.engine_no;
    case 'Пробег':
      return updateObj.updateData.in_the_way;
    default:
      return;
    }
  };

  const updateHandler = () => {
    if (!payload) return;
    setUpdateObj(prevState => ({
      ...prevState,
      // eslint-disable-next-line camelcase
      id: data.id
    }));
    console.log('updateObj===', updateObj);
    carUpdate(updateObj);
    router(RouteNames.CARS_ACTIVE);
  };

  const deleteHandler = () => {
    if (!payload) return;
    carDelete(data.id);
    router(RouteNames.CARS_ACTIVE);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
    case 'Кузов и №':
      // eslint-disable-next-line camelcase
      return setUpdateObj(prevState => ({
        ...prevState,
        updateData: {
          ...prevState.updateData,
          // eslint-disable-next-line camelcase
          body_no: event.target.value
        }
      }));
    case 'Двигатель':
      return setUpdateObj(prevState => ({
        ...prevState,
        updateData: {
          ...prevState.updateData,
          // eslint-disable-next-line camelcase
          engine_no: event.target.value
        }
      }));
    case 'Пробег':
      return setUpdateObj(prevState => ({
        ...prevState,
        updateData: {
          ...prevState.updateData,
          // eslint-disable-next-line camelcase
          in_the_way: +event.target.value
        }
      }));
    default:
      return;
    }
  };

  return (
    loading ? <h1>Загрузка...</h1> :
      <>
        <HeaderPage>Активные / Car_id: {data.id}</HeaderPage>
        <CarItemsStyled>
          {updateHeaders.map(elem => (
            <TextField
              label={elem}
              id={elem}
              size="small"
              key={elem}
              name={'this_is-name'}
              value={setCurrVal(elem)}
              onChange={handleChange}
            />
          ))}
        </CarItemsStyled>
        <BtnsStyled>
          <Button onClick={updateHandler} variant="contained" sx={{textTransform: 'none'}}>Обновить</Button>
          <Button onClick={deleteHandler} variant="contained" sx={{textTransform: 'none'}}>Удалить</Button>
        </BtnsStyled>
      </>
  );
};

export default CarItem;
