import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import {Checkbox, FormControlLabel} from '@mui/material';
import {ChangeEvent, useEffect, useState} from 'react';

import HeaderPage from '../../../../../../ui/HeaderPage';
import Selection from '../../../../../../components/Select';
import {cars} from '../../../../../../assets/helpers/Cars/CarsActive.helpers';
import {useActions} from '../../../../../../hooks/useActions';
import {RouteNames} from '../../../../../../routes/Routes/Routes.enum';
import {checkStyles} from '../CarActive/CarActive.styles';
import {
  createBottomFields,
  createCarObj,
  createFields,
  uploadBtns
} from '../../../../../../assets/helpers/Cars/CarsCreate.helpers';
import {useTypedSelector} from '../../../../../../hooks/useTypedSelector';
import {AuthResponse} from '../../../../../../store/slices/Auth/authActionCreators/auth.typings';

import {
  AddBtnStyled,
  CarsActiveStyled, ChecksStyled, CreateFieldsStyled,
  SelectionStyled, UploadBtnsStyled,
} from './CarCreate.styles';


const CarCreate = () => {
  const {payload} = useTypedSelector(state => state.auth);
  const {carCreate} = useActions();
  const router = useNavigate();
  const [retailChecked, setRetailChecked] = useState(false);
  const [wholesaleChecked, setWholesaleChecked] = useState(false);
  const [inWayChecked, setInWayChecked] = useState(false);
  const [archiveChecked, setArchiveChecked] = useState(false);
  const [createObj, setCreateObj] = useState(createCarObj);

  useEffect(() => {
    setCreateObj(prevState => ({
      ...prevState,
      // eslint-disable-next-line camelcase
      sticker_notes: (payload as AuthResponse).user.email,
      // eslint-disable-next-line camelcase
      user_id: (payload as AuthResponse).user.id,
      color: 'test',
      optic: 'test',
      marriage: 'test',
      videos: 'test'
    }));
  }, []);

  const addHandler = () => {
    console.log('createObj ===', createObj);
    carCreate(createObj);
    router(RouteNames.CARS_ACTIVE);
  };

  const handleRetail = (event: ChangeEvent<HTMLInputElement>) => setRetailChecked(event.target.checked);

  const handleWholesale = (event: ChangeEvent<HTMLInputElement>) => setWholesaleChecked(event.target.checked);

  const handleInWay = (event: ChangeEvent<HTMLInputElement>) => setInWayChecked(event.target.checked);

  const handleArchive = (event: ChangeEvent<HTMLInputElement>) => setArchiveChecked(event.target.checked);

  const setCurrVal = val => {
    switch (val) {
    case '№ кузова':
      return createObj.body_no;
    case '№ Двигателя':
      return createObj.engine_no;
    case 'Пробег':
      return createObj.in_the_way;
    case 'Фара':
      return createObj.notes;
    case 'Стоп':
      return createObj.notes_zibiz;
    case 'Брак':
      return createObj.taillight;
    case 'Color':
      return createObj.images;
    case 'Optic':
      return createObj.documents;
    case 'No TES':
      return createObj.headlight;
    default:
      return;
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
    case '№ кузова':
      // eslint-disable-next-line camelcase
      return setCreateObj(prevState => ({
        ...prevState,
        // eslint-disable-next-line camelcase
        body_no: event.target.value
      }));
    case '№ Двигателя':
      return setCreateObj(prevState => ({
        ...prevState,
        // eslint-disable-next-line camelcase
        engine_no: event.target.value
      }));
    case 'Пробег':
      return setCreateObj(prevState => ({
        ...prevState,
        // eslint-disable-next-line camelcase
        in_the_way: +event.target.value
      }));
    case 'Фара':
      return setCreateObj(prevState => ({
        ...prevState,
        // eslint-disable-next-line camelcase
        notes: event.target.value
      }));
    case 'Стоп':
      return setCreateObj(prevState => ({
        ...prevState,
        // eslint-disable-next-line camelcase
        notes_zibiz: event.target.value
      }));
    case 'Брак':
      return setCreateObj(prevState => ({
        ...prevState,
        // eslint-disable-next-line camelcase
        taillight: event.target.value
      }));
    case 'Color':
      return setCreateObj(prevState => ({
        ...prevState,
        // eslint-disable-next-line camelcase
        images: event.target.value
      }));
    case 'Optic':
      return setCreateObj(prevState => ({
        ...prevState,
        // eslint-disable-next-line camelcase
        documents: event.target.value
      }));
    case 'No TES':
      return setCreateObj(prevState => ({
        ...prevState,
        // eslint-disable-next-line camelcase
        headlight: event.target.value
      }));
    default:
      return;
    }
  };

  return (
    <>
      <CarsActiveStyled>
        <HeaderPage>Активные / Добавить машину</HeaderPage>
      </CarsActiveStyled>
      <SelectionStyled>
        <Selection name={'Пользователь'} values={cars} width={440} />
        <Selection name={'Менеджер'} values={cars} width={440} />
        <Selection name={'Поставщик'} values={cars} width={430} />
      </SelectionStyled>
      <SelectionStyled>
        <Selection name={'Производитель'} values={cars} width={254} />
        <Selection name={'Модель'} values={cars} width={254} />
        <Selection name={'Кузов'} values={cars} width={254} />
        <Selection name={'Двигатель'} values={cars} width={254} />
        <Selection name={'Трансмиссия'} values={cars} width={254} />
      </SelectionStyled>
      <CreateFieldsStyled>
        {createFields.map(e => (
          <TextField id={e} label={e} variant="outlined" key={e} sx={{width: '1337px'}} value={setCurrVal(e)} onChange={handleChange} />
        ))}
      </CreateFieldsStyled>
      <UploadBtnsStyled>
        {uploadBtns.map(e => (
          <Button variant="contained" component="label" key={e} sx={{textTransform: 'none'}}>
            {e}
            <input hidden accept="image/*" multiple type="file" />
          </Button>))}
      </UploadBtnsStyled>
      <CreateFieldsStyled>
        {createBottomFields.map(e => (
          <TextField id={e} label={e} variant="outlined" key={e} sx={{width: '1337px'}} value={setCurrVal(e)} onChange={handleChange} />
        ))}
      </CreateFieldsStyled>
      <ChecksStyled>
        <FormControlLabel sx={checkStyles} control={<Checkbox checked={inWayChecked} onChange={handleInWay} />} label="В пути" />
        <FormControlLabel sx={checkStyles} control={<Checkbox checked={retailChecked} onChange={handleRetail} />} label="В рознице" />
        <FormControlLabel sx={checkStyles} control={<Checkbox checked={wholesaleChecked} onChange={handleWholesale} />} label="Мелкий опт" />
        <FormControlLabel sx={checkStyles} control={<Checkbox checked={archiveChecked} onChange={handleArchive} />} label="Архив" />
      </ChecksStyled>
      <AddBtnStyled>
        <Button onClick={addHandler} variant="contained" sx={{textTransform: 'none'}}>Добавить</Button>
      </AddBtnStyled>
    </>
  );
};

export default CarCreate;
