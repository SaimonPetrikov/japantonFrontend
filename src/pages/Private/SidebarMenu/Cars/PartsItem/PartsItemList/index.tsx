import {useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import HeaderPage from '../../../../../../ui/HeaderPage';
import Search from '../../../../../../components/Search';
import {SparePartsHeaders, SparePartsSearchHeaders} from '../../../../../../assets/helpers/PartsItem/PartsItemList.helpers';
import {useActions} from '../../../../../../hooks/useActions';
import {useTypedSelector} from '../../../../../../hooks/useTypedSelector';
import PartsItemCard from '../../../../../../components/PartsItemCard';
import Selection from '../../../../../../components/Select';
import {cars} from '../../../../../../assets/helpers/Cars/CarsActive.helpers';

import {
  HeadersStyled,
  HeaderStyled, ItemCardStyled,
  ItemsHeadStyled,
  ItemStyled,
  SelectionStyled, SeparateLineStyled
} from './PartsItemList.styles';

const CarsPartsItem = () => {
  const {partsItemAll} = useActions();
  const {loadingItem, partsItemList, isItemChanged} = useTypedSelector(state => state.partsItem);

  useEffect(() => {
    if (loadingItem) return;
    partsItemAll();
  }, []);

  useEffect(() => {
    console.log(isItemChanged);
    if (isItemChanged) partsItemAll();
  }, [isItemChanged]);

  // useEffect(() => {
  //   if (loading || !data) return;
  //   if (data.constructor === Array) setItems(data.filter((_, index) => index + 1 < 12));
  // }, [loading]);

  const nextHandler = () => null;

  const itemsList = () => {
    if (!partsItemList) return;

    if (partsItemList.partItem.length !== 0) {
      return (
        <InfiniteScroll
          dataLength={partsItemList.partItem.length}
          next={nextHandler}
          hasMore={true}
          loader={<h2>Loading...</h2>}
        >
          {partsItemList.partItem.map((elem, index) => (
            <PartsItemCard key={elem.id} partsItem={partsItemList?.partItem[index]}/>
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
        {loadingItem ? <h1>Загрузка...</h1> :
          itemsList()
        }
      </ItemStyled>
    </>
  );
};

export default CarsPartsItem;
