import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import {ChangeEvent, useState} from 'react';

import HeaderPage from '../../../../../../../ui/HeaderPage';
import {useActions} from '../../../../../../../hooks/useActions';
import {RouteNames} from '../../../../../../../routes/Routes/Routes.enum';
import {useTypedSelector} from '../../../../../../../hooks/useTypedSelector';
import {
  ProvidersSingleResponse
} from '../../../../../../../store/slices/Cars/Providers/providersActionCreators/providers.typings';
import {
  createFields,
  updateInitial,
  updateKeys
} from '../../../../../../../assets/helpers/Cars/Providers/ProvidersChange.helpers';
import {BtnsStyled, ItemFieldsStyled} from '../../../Cars.styles';


const CarsProvidersUpdate = () => {
  const {providersSingle, loadingProviders} = useTypedSelector(state => state.providers);
  const {providersUpdate, providersDelete} = useActions();
  const [isInit, setIsInit] = useState(true);
  const router = useNavigate();
  const [changeObj, setChangeObj] = useState(updateInitial);

  const updateHandler = () => {
    console.log('createObj ===', changeObj);
    providersUpdate(changeObj);
    router(RouteNames.CARS_PROVIDERS);
  };

  const deleteHandler = () => {
    providersDelete((providersSingle as ProvidersSingleResponse).provider.id);
    router(RouteNames.CARS_PROVIDERS);
  };

  const setCurrVal = val => {
    if (isInit) {
      updateInitial.id = (providersSingle as ProvidersSingleResponse).provider.id;
      updateKeys.map(elem => updateInitial.updateData[elem] = providersSingle?.provider[elem]);
      setChangeObj(updateInitial);
      setIsInit(false);
    }

    switch (val) {
    case 'Название':
      return changeObj.updateData.name;
    case 'E-mail':
      return changeObj.updateData.email;
    case 'Список машин':
      return changeObj.updateData.percent;
    default:
      return;
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
    case 'Название':
      return setChangeObj(prevState => ({
        ...prevState,
        updateData: {
          ...prevState.updateData,
          name: event.target.value
        }
      }));
    case 'E-mail':
      return setChangeObj(prevState => ({
        ...prevState,
        updateData: {
          ...prevState.updateData,
          email: event.target.value
        }
      }));
    case 'Список машин':
      return setChangeObj(prevState => ({
        ...prevState,
        updateData: {
          ...prevState.updateData,
          percent: +event.target.value
        }
      }));
    default:
      return;
    }
  };

  return (
    loadingProviders ? <h1>Загрузка...</h1> :
      <>
        {/* eslint-disable-next-line max-len */}
        <HeaderPage>Поставщики / Редактировать / {(providersSingle as ProvidersSingleResponse).provider.name}</HeaderPage>
        <ItemFieldsStyled>
          {createFields.map(e => (
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

export default CarsProvidersUpdate;
