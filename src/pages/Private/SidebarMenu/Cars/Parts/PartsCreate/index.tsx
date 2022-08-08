import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import {ChangeEvent, useState} from 'react';

import HeaderPage from '../../../../../../ui/HeaderPage';
import {useActions} from '../../../../../../hooks/useActions';
import {RouteNames} from '../../../../../../routes/Routes/Routes.enum';
import {createFields, createInitial} from '../../../../../../assets/helpers/Parts/PartsChange.helpers';

import {AddBtnStyled, CreateFieldsStyled, HeaderStyled} from './PartsCreate.styles';


const CarsPartsCreate = () => {
  const {partsCreate} = useActions();
  const router = useNavigate();
  const [createObj, setCreateObj] = useState(createInitial);

  const addHandler = () => {
    console.log('createObj ===', createObj);
    partsCreate(createObj);
    router(RouteNames.CARS_PARTS);
  };

  const setCurrVal = val => {
    switch (val) {
    case 'Введите наименование (Ru)':
      return createObj.name_ru;
    case 'Введите наименование (En)':
      return createObj.name_en;
    case 'Расположение':
      return createObj.sticker_fields;
    case 'Код':
      return createObj.sort;
    default:
      return;
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
    case 'Введите наименование (Ru)':
      // eslint-disable-next-line camelcase
      return setCreateObj(prevState => ({
        ...prevState,
        // eslint-disable-next-line camelcase
        name_ru: event.target.value
      }));
    case 'Введите наименование (En)':
      return setCreateObj(prevState => ({
        ...prevState,
        // eslint-disable-next-line camelcase
        name_en: event.target.value
      }));
    case 'Расположение':
      return setCreateObj(prevState => ({
        ...prevState,
        // eslint-disable-next-line camelcase
        sticker_fields: event.target.value
      }));
    case 'Код':
      return setCreateObj(prevState => ({
        ...prevState,
        // eslint-disable-next-line camelcase
        sort: +event.target.value
      }));
    default:
      return;
    }
  };

  return (
    <>
      <HeaderStyled>
        <HeaderPage>Запчасти / Добавить запчасть</HeaderPage>
      </HeaderStyled>
      <CreateFieldsStyled>
        {createFields.map(e => (
          <TextField id={e} label={e} variant="outlined" key={e} sx={{width: '1337px'}} value={setCurrVal(e)} onChange={handleChange} />
        ))}
      </CreateFieldsStyled>
      <AddBtnStyled>
        <Button onClick={addHandler} variant="contained" sx={{textTransform: 'none'}}>Добавить</Button>
      </AddBtnStyled>
    </>
  );
};

export default CarsPartsCreate;
