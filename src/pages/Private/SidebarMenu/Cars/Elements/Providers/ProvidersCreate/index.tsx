import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import {ChangeEvent, useState} from 'react';

import HeaderPage from '../../../../../../../ui/HeaderPage';
import {useActions} from '../../../../../../../hooks/useActions';
import {RouteNames} from '../../../../../../../routes/Routes/Routes.enum';
import {createFields, createInitial} from '../../../../../../../assets/helpers/Cars/Providers/ProvidersChange.helpers';
import {AddBtnStyled, ItemFieldsStyled} from '../../../Cars.styles';


const CarsProvidersCreate = () => {
  const {providersCreate} = useActions();
  const router = useNavigate();
  const [createObj, setCreateObj] = useState(createInitial);

  const addHandler = () => {
    console.log('createObj ===', createObj);
    providersCreate(createObj);
    router(RouteNames.CARS_PROVIDERS);
  };

  const setCurrVal = val => {
    switch (val) {
    case 'Название':
      return createObj.name;
    case 'E-mail':
      return createObj.email;
    case 'Список машин':
      return createObj.percent;
    default:
      return;
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
    case 'Название':
      return setCreateObj(prevState => ({
        ...prevState,
        name: event.target.value
      }));
    case 'E-mail':
      return setCreateObj(prevState => ({
        ...prevState,
        email: event.target.value
      }));
    case 'Список машин':
      return setCreateObj(prevState => ({
        ...prevState,
        percent: +event.target.value
      }));
    default:
      return;
    }
  };

  return (
    <>
      <HeaderPage>Поставщики / Добавить поставщика</HeaderPage>
      <ItemFieldsStyled>
        {createFields.map(e => (
          <TextField id={e} label={e} variant="outlined" key={e} sx={{width: '1337px'}} value={setCurrVal(e)} onChange={handleChange} />
        ))}
      </ItemFieldsStyled>
      <AddBtnStyled>
        <Button onClick={addHandler} variant="contained" sx={{textTransform: 'none'}}>Добавить</Button>
      </AddBtnStyled>
    </>
  );
};

export default CarsProvidersCreate;
