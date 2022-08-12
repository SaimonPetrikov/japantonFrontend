import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import {ChangeEvent, useState} from 'react';

import HeaderPage from '../../../../../../ui/HeaderPage';
import {useActions} from '../../../../../../hooks/useActions';
import {RouteNames} from '../../../../../../routes/Routes/Routes.enum';
import {
  createFields,
  partsUpdateKeys,
  updateInitialParts
} from '../../../../../../assets/helpers/Parts/PartsChange.helpers';
import {useTypedSelector} from '../../../../../../hooks/useTypedSelector';
import {PartsSingleResponse} from '../../../../../../store/slices/Cars/Parts/partsActionCreators/parts.typings';

import {CreateFieldsStyled, HeaderStyled, BtnsStyled} from './PartsUpdate.styles';


const CarsPartsUpdate = () => {
  const {partsSingle, loading} = useTypedSelector(state => state.parts);
  const {partsUpdate, partsDelete} = useActions();
  const [isInit, setIsInit] = useState(true);
  const router = useNavigate();
  const [changeObj, setChangeObj] = useState(updateInitialParts);

  const updateHandler = () => {
    console.log('createObj ===', changeObj);
    partsUpdate(changeObj);
    router(RouteNames.CARS_PARTS);
  };

  const deleteHandler = () => {
    partsDelete((partsSingle as PartsSingleResponse).part.id);
    router(RouteNames.CARS_PARTS);
  };

  const setCurrVal = val => {
    if (isInit) {
      updateInitialParts.id = (partsSingle as PartsSingleResponse).part.id;
      partsUpdateKeys.map(elem => updateInitialParts.updateData[elem] = partsSingle?.part[elem]);
      setChangeObj(updateInitialParts);
      setIsInit(false);
    }

    switch (val) {
    case 'Введите наименование (Ru)':
      return changeObj.updateData.name_ru;
    case 'Введите наименование (En)':
      return changeObj.updateData.name_en;
    case 'Расположение':
      return changeObj.updateData.sticker_fields;
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
          sticker_fields: event.target.value
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
    loading ? <h1>Загрузка...</h1> :
      <>
        <HeaderStyled>
          {/* eslint-disable-next-line max-len */}
          <HeaderPage>Типы запчастей / Редактировать / {(partsSingle as PartsSingleResponse).part.name_ru}</HeaderPage>
        </HeaderStyled>
        <CreateFieldsStyled>
          {createFields.map(e => (
            <TextField id={e} label={e} variant="outlined" key={e} sx={{width: '1337px'}} value={setCurrVal(e)} onChange={handleChange} />
          ))}
        </CreateFieldsStyled>
        <BtnsStyled>
          <Button onClick={updateHandler} variant="contained" sx={{textTransform: 'none'}}>Обновить</Button>
          <Button onClick={deleteHandler} variant="contained" sx={{textTransform: 'none'}}>Удалить</Button>
        </BtnsStyled>
      </>
  );
};

export default CarsPartsUpdate;
