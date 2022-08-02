import {Checkbox, FormControlLabel} from '@mui/material';
import {ChangeEvent, useEffect, useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import HeaderPage from '../../../../../ui/HeaderPage';
import Selection from '../../../../../components/Select';
import CarCard from '../../../../../components/CarCard';
import {cars, carsHeaders} from '../../../../../assets/helpers/carsActive.helpers';
import {useTypedSelector} from '../../../../../hooks/useTypedSelector';
import {CarResponse, ICarProps} from '../../../../../store/action-creators/cars/cars.typings';

import {
  CarCardStyled,
  CarsActiveStyled,
  CarsHeadStyled,
  CarsStyled, checkStyles,
  HeadersStyled,
  SelectionStyled,
  SeparateLineStyled
} from './Active.styles';

const CarsActive = () => {
  const {carAll, loadingCars} = useTypedSelector(state => state.car);
  const [retailChecked, setRetailChecked] = useState(false);
  const [wholesaleChecked, setWholesaleChecked] = useState(false);
  const [items, setItems] = useState<ICarProps[]>([]);

  useEffect(() => {
    if (!carAll) return;
    const response = (carAll as CarResponse).car;
    const data = (response as ICarProps[]);
    setItems(data.filter((_, index) => index < 12));
  }, [carAll]);

  const carsList = () => {
    if (!carAll) return;
    const response = (carAll as CarResponse).car;
    const data = (response as ICarProps[]);

    const nextHandler = () => {
      if (items.length === data.length) return;
      setTimeout(() => {
        // eslint-disable-next-line max-len
        setItems(items.concat(data.filter((_, index) => index > items.length && index <= items.length + 5)));
      }, 1500);
    };

    if (data.length !== 0) {
      return (
        <InfiniteScroll
          dataLength={items.length}
          next={nextHandler}
          hasMore={true}
          loader={(items.length !== data.length - 1) && <h2>Loading...</h2>}
        >
          {items.map(elem => (
            <CarCard key={elem.id} cars={elem}/>
          ))}
        </InfiniteScroll>);
    } else {
      return (
        <h1>Список пуст</h1>
      );
    }
  };

  const handleRetail = (event: ChangeEvent<HTMLInputElement>) => setRetailChecked(event.target.checked);

  const handleWholesale = (event: ChangeEvent<HTMLInputElement>) => setWholesaleChecked(event.target.checked);

  return (
    <>
      <CarsActiveStyled>
        <HeaderPage>Активные</HeaderPage>
      </CarsActiveStyled>
      <SelectionStyled>
        <Selection name={'Производитель'} values={cars} width={160} />
        <Selection name={'Модель'} values={cars} width={105} />
        <Selection name={'Кузов'} values={cars} width={90} />
        <Selection name={'Двигатель'} values={cars} width={120} />
        <Selection name={'Пользователь'} values={cars} width={150} />
        <Selection name={'Менеджер'} values={cars} width={125} />
        <FormControlLabel sx={checkStyles} control={<Checkbox checked={retailChecked} onChange={handleRetail} />} label="В рознице" />
        <FormControlLabel sx={checkStyles} control={<Checkbox checked={wholesaleChecked} onChange={handleWholesale} />} label="Мелкий опт" />
      </SelectionStyled>
      <CarsStyled>
        <CarsHeadStyled>
          {carsHeaders.map((elem, index) => (
            <CarCardStyled key={elem}>
              {(index !== 0) && <SeparateLineStyled></SeparateLineStyled>}
              <HeadersStyled>
                {elem}
              </HeadersStyled>
            </CarCardStyled>
          ))}
        </CarsHeadStyled>
        {!loadingCars ?
          carsList() :
          <h1>Машины загружаются...</h1>}
      </CarsStyled>
    </>
  );
};

export default CarsActive;
