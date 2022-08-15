import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import {ChangeEvent, useState} from 'react';

import HeaderPage from '../../../../../../../ui/HeaderPage';
import {useActions} from '../../../../../../../hooks/useActions';
import {RouteNames} from '../../../../../../../routes/Routes/Routes.enum';
import {useTypedSelector} from '../../../../../../../hooks/useTypedSelector';
import {
  PartsItemSingleResponse
} from '../../../../../../../store/slices/Cars/PartsItem/partsItemActionCreators/partsItem.typings';
import {
  changeFields,
  changeInitialPartsItem,
  partsItemChangeKeys
} from '../../../../../../../assets/helpers/Cars/PartsItem/PartsItemChange.helpers';
import {BtnsStyled, ItemFieldsStyled} from '../../../Cars.styles';


const CarsPartsItemUpdate = () => {
  const {partsItemSingle, loadingItem} = useTypedSelector(state => state.partsItem);
  const {partsItemUpdate, partsItemDelete} = useActions();
  const [isInit, setIsInit] = useState(true);
  const router = useNavigate();
  const [changeObj, setChangeObj] = useState(changeInitialPartsItem);

  const updateHandler = () => {
    console.log('createObj ===', changeObj);
    partsItemUpdate(changeObj);
    router(RouteNames.CARS_PARTS_ITEM);
  };

  const deleteHandler = () => {
    partsItemDelete((partsItemSingle as PartsItemSingleResponse).partItem.id);
    router(RouteNames.CARS_PARTS_ITEM);
  };

  const setCurrVal = val => {
    if (isInit) {
      changeInitialPartsItem.id = (partsItemSingle as PartsItemSingleResponse).partItem.id;
      partsItemChangeKeys.map(elem => changeInitialPartsItem.updateData[elem] = partsItemSingle?.partItem[elem]);
      setChangeObj(changeInitialPartsItem);
      setIsInit(false);
    }

    switch (val) {
    case 'Введите наименование (Ru)':
      return changeObj.updateData.name_ru;
    case 'Введите наименование (En)':
      return changeObj.updateData.name_en;
    case 'Расположение':
      return changeObj.updateData.code;
    case 'Код':
      return changeObj.updateData.sort;
    default:
      return;
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
    case 'Введите наименование (Ru)':
      // eslint-disable-next-line camelcase
      return setChangeObj(prevState => ({
        ...prevState,
        updateData: {
          ...prevState.updateData,
          // eslint-disable-next-line camelcase
          name_ru: event.target.value
        }
      }));
    case 'Введите наименование (En)':
      return setChangeObj(prevState => ({
        ...prevState,
        updateData: {
          ...prevState.updateData,
          // eslint-disable-next-line camelcase
          name_en: event.target.value
        }
      }));
    case 'Расположение':
      return setChangeObj(prevState => ({
        ...prevState,
        updateData: {
          ...prevState.updateData,
          // eslint-disable-next-line camelcase
          code: event.target.value
        }
      }));
    case 'Код':
      return setChangeObj(prevState => ({
        ...prevState,
        updateData: {
          ...prevState.updateData,
          // eslint-disable-next-line camelcase
          sort: +event.target.value
        }
      }));
    default:
      return;
    }
  };

  return (
    loadingItem ? <h1>Загрузка...</h1> :
      <>
        {/* eslint-disable-next-line max-len */}
        <HeaderPage>Запчасти / Редактировать / Запчасть: {(partsItemSingle as PartsItemSingleResponse).partItem.id}</HeaderPage>
        <ItemFieldsStyled>
          {changeFields.map(e => (
            <TextField id={e} label={e} variant="outlined" key={e} sx={{width: '1337px'}} value={setCurrVal(e)} onChange={handleChange} />
          ))}
        </ItemFieldsStyled>
        <BtnsStyled>
          <Button onClick={updateHandler} variant="contained" sx={{textTransform: 'none'}}>Обновить</Button>
          <Button onClick={deleteHandler} variant="contained" sx={{textTransform: 'none'}}>Удалить</Button>
        </BtnsStyled>
      </>
  );
};

export default CarsPartsItemUpdate;
