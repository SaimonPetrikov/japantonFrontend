import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import {Checkbox, FormControlLabel} from '@mui/material';
import {ChangeEvent, useState} from 'react';

import HeaderPage from '../../../../../ui/HeaderPage';
import Selection from '../../../../../components/Select';
import {cars} from '../../../../../assets/helpers/carsActive.helpers';
import {useActions} from '../../../../../hooks/useActions';
import {RouteNames} from '../../../../../routes/Routes/Routes.enum';
import {checkStyles} from '../Active/Active.styles';

import {
  AddBtnStyled,
  CarsActiveStyled, ChecksStyled, CreateFieldsStyled,
  SelectionStyled, UploadBtnsStyled,
} from './Create.styles';


const CarsCreate = () => {
  const {carCreate} = useActions();
  const router = useNavigate();
  const [retailChecked, setRetailChecked] = useState(false);
  const [wholesaleChecked, setWholesaleChecked] = useState(false);
  const [inWayChecked, setInWayChecked] = useState(false);
  const [archiveChecked, setArchiveChecked] = useState(false);

  const createFields = ['№ кузова', '№ Двигателя', 'Пробег', 'Фара', 'Стоп', 'Брак'];
  const createBottomFields = ['Пробег', 'Фара', 'Видео', 'Color', 'Optic', 'No TES'];
  const uploadBtns = ['Загрузить фото', 'Загрузить документы', 'Загрузить видео'];

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

  const addHandler = () => {
    carCreate(createCar);
    router(RouteNames.CARS_ACTIVE);
  };

  const handleRetail = (event: ChangeEvent<HTMLInputElement>) => setRetailChecked(event.target.checked);

  const handleWholesale = (event: ChangeEvent<HTMLInputElement>) => setWholesaleChecked(event.target.checked);

  const handleInWay = (event: ChangeEvent<HTMLInputElement>) => setInWayChecked(event.target.checked);

  const handleArchive = (event: ChangeEvent<HTMLInputElement>) => setArchiveChecked(event.target.checked);

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
          <TextField id="outlined-basic" label={e} variant="outlined" key={e} sx={{width: '1337px'}} />
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
          <TextField id="outlined-basic" label={e} variant="outlined" key={e} sx={{width: '1337px'}} />
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

export default CarsCreate;
