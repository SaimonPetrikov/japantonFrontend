import {Checkbox, FormControlLabel} from '@mui/material';
import {ChangeEvent, useEffect, useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import HeaderPage from '../../../../../../ui/HeaderPage';
import Selection from '../../../../../../components/Select';
import CarCard from '../../../../../../components/CarCard';
import {cars, carsHeaders} from '../../../../../../assets/helpers/Cars/Active/CarsActive.helpers';
import {useTypedSelector} from '../../../../../../hooks/useTypedSelector';
import {CarResponse, ICarProps} from '../../../../../../store/slices/Cars/Active/activeActionCreators/cars.typings';
import {useActions} from '../../../../../../hooks/useActions';

import {checkStyles,
  HeadersStyled, HeaderStyled, ItemCardStyled, ItemsHeadStyled, ItemStyled,
  SelectionStyled,
  SeparateLineStyled
} from './CarActive.styles';

const CarsActive = () => {
  const {carsAll} = useActions();
  const {loading, payload} = useTypedSelector(state => state.car);
  const [retailChecked, setRetailChecked] = useState(false);
  const [wholesaleChecked, setWholesaleChecked] = useState(false);
  const [items, setItems] = useState<ICarProps[]>([]);
  const response = (payload as CarResponse)?.car;
  const data = (response as ICarProps[]);

  useEffect(() => {
    if (data?.constructor === Array || loading) return;
    carsAll();
  }, []);

  useEffect(() => {
    if (loading || !data) return;
    if (data.constructor === Array) setItems(data.filter((_, index) => index + 1 < 12));
  }, [loading]);

  const nextHandler = () => {
    if (items.length === data.length) return;
    // eslint-disable-next-line max-len
    setItems(items.concat(data.filter((_, index) => index + 1 > items.length && index + 1 <= items.length + 5)));
  };

  const itemsList = () => {
    if (!payload || !data) return;

    if (data.length !== 0) {
      return (
        <InfiniteScroll
          dataLength={items.length}
          next={nextHandler}
          hasMore={true}
          loader={(items.length !== data.length) && <h2>Loading...</h2>}
        >
          {items.map((elem, index) => (
            <CarCard key={elem.id} cars={data[index]}/>
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
      <HeaderStyled>
        <HeaderPage>Активные</HeaderPage>
      </HeaderStyled>
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
      <ItemStyled>
        <ItemsHeadStyled>
          {carsHeaders.map((elem, index) => (
            <ItemCardStyled key={elem}>
              {(index !== 0) && <SeparateLineStyled></SeparateLineStyled>}
              <HeadersStyled>
                {elem}
              </HeadersStyled>
            </ItemCardStyled>
          ))}
        </ItemsHeadStyled>
        {loading ? <h1>Загрузка...</h1> :
          itemsList()
        }
      </ItemStyled>
    </>
  );
};

export default CarsActive;
