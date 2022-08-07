import {useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import HeaderPage from '../../../../../../ui/HeaderPage';
import Selection from '../../../../../../components/Select';
import {cars} from '../../../../../../assets/helpers/Cars/CarsActive.helpers';
import Search from '../../../../../../components/Search';
import {SparePartsHeaders, SparePartsSearchHeaders} from '../../../../../../assets/helpers/Parts/PartsList.helpers';
import {useActions} from '../../../../../../hooks/useActions';
import {useTypedSelector} from '../../../../../../hooks/useTypedSelector';
import PartsCard from '../../../../../../components/PartsCard';

import {
  HeadersStyled,
  HeaderStyled, ItemCardStyled,
  ItemsHeadStyled,
  ItemStyled,
  SelectionStyled, SeparateLineStyled
} from './PartsList.styles';

const CarsPart = () => {
  const {partsAll} = useActions();
  const {loading, partsList, isChanged} = useTypedSelector(state => state.parts);

  useEffect(() => {
    partsAll();
  }, []);

  useEffect(() => {
    if (isChanged) partsAll();
  }, [isChanged]);

  // useEffect(() => {
  //   if (loading || !data) return;
  //   if (data.constructor === Array) setItems(data.filter((_, index) => index + 1 < 12));
  // }, [loading]);

  const nextHandler = () => null;

  const itemsList = () => {
    if (!partsList) return;

    if (partsList.part.length !== 0) {
      return (
        <InfiniteScroll
          dataLength={partsList.part.length}
          next={nextHandler}
          hasMore={true}
          loader={<h2>Loading...</h2>}
        >
          {partsList.part.map((elem, index) => (
            <PartsCard key={elem.id} parts={partsList.part[index]}/>
          ))}
        </InfiniteScroll>);
    } else {
      return (
        <h1>Список пуст</h1>
      );
    }
  };

  return (
    <>
      <HeaderStyled>
        <HeaderPage>Запчасти</HeaderPage>
      </HeaderStyled>
      <SelectionStyled>
        <Search name={SparePartsSearchHeaders[0]} width={'251px'} />
        <Search name={SparePartsSearchHeaders[1]} width={'219px'} />
        <Search name={SparePartsSearchHeaders[2]} width={'216px'} />
        <Search name={SparePartsSearchHeaders[3]} width={'75px'} />
        <Selection name={SparePartsSearchHeaders[4]} values={cars} width={153} />
        <Search name={SparePartsSearchHeaders[5]} width={'75px'} />
        <Search name={SparePartsSearchHeaders[6]} width={'75px'} />
        <Selection name={SparePartsSearchHeaders[7]} values={cars} width={130} />
      </SelectionStyled>
      <ItemStyled>
        <ItemsHeadStyled>
          {SparePartsHeaders.map((elem, index) => (
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

export default CarsPart;
