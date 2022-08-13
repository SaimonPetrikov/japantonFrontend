import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {ChangeEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {useTypedSelector} from '../../../../../../hooks/useTypedSelector';
import HeaderPage from '../../../../../../ui/HeaderPage';
import {useActions} from '../../../../../../hooks/useActions';
import {RouteNames} from '../../../../../../routes/Routes/Routes.enum';
import {CarResponse, ICarProps} from '../../../../../../store/slices/Cars/Active/activeActionCreators/cars.typings';
import {initialUpdateObj, updateHeaders, updateKeys} from '../../../../../../assets/helpers/Cars/Active/CarsUpdate.helpers';

import {BtnsStyled, CarItemsStyled} from './CarUpdate.styles';

const CarUpdate = () => {
  const {payload, loading} = useTypedSelector(state => state.car);
  const response = (payload as CarResponse).car;
  const data = (response as ICarProps);
  const {carDelete, carUpdate} = useActions();
  const router = useNavigate();
  const [isInit, setIsInit] = useState(true);
  const [updateObj, setUpdateObj] = useState(initialUpdateObj);

  const setCurrVal = val => {
    if (isInit) {
      initialUpdateObj.id = data.id;
      updateKeys.map(elem => initialUpdateObj.updateData[elem] = data[elem]);
      setUpdateObj(initialUpdateObj);
      setIsInit(false);
    }
    switch (val) {
    case 'Кузов и №':
      return updateObj.updateData.body_no;
    case 'Двигатель':
      return updateObj.updateData.engine_no;
    case 'Пробег':
      return updateObj.updateData.in_the_way;
    case 'Наименование':
      return updateObj.updateData.notes;
    case 'Менеджер':
      return updateObj.updateData.notes_zibiz;
    case 'Поставщик':
      return updateObj.updateData.taillight;
    case 'Трансмиссия':
      return updateObj.updateData.marriage;
    default:
      return;
    }
  };

  const updateHandler = () => {
    console.log('updateObj===', updateObj);
    carUpdate(updateObj);
    router(`${RouteNames.CARS_UPDATE}/${updateObj.id}`);
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
    case 'Наименование':
      return setUpdateObj(prevState => ({
        ...prevState,
        updateData: {
          ...prevState.updateData,
          // eslint-disable-next-line camelcase
          notes: event.target.value
        }
      }));
    case 'Менеджер':
      return setUpdateObj(prevState => ({
        ...prevState,
        updateData: {
          ...prevState.updateData,
          // eslint-disable-next-line camelcase
          notes_zibiz: event.target.value
        }
      }));
    case 'Поставщик':
      return setUpdateObj(prevState => ({
        ...prevState,
        updateData: {
          ...prevState.updateData,
          // eslint-disable-next-line camelcase
          taillight: event.target.value
        }
      }));
    case 'Трансмиссия':
      return setUpdateObj(prevState => ({
        ...prevState,
        updateData: {
          ...prevState.updateData,
          // eslint-disable-next-line camelcase
          marriage: event.target.value
        }
      }));
    default:
      return;
    }
  };

  return (
    loading ? <h1>Загрузка...</h1> :
      <>
        <HeaderPage>Активные / Редактирование / Car_id: {data.id}</HeaderPage>
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

export default CarUpdate;
