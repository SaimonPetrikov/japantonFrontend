import {useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import HeaderPage from '../../../../../../ui/HeaderPage';
import Search from '../../../../../../components/Search';
import {PartsItemHeaders, PartsItemSearchHeaders} from '../../../../../../assets/helpers/Cars/PartsItem/PartsItemList.helpers';
import {useActions} from '../../../../../../hooks/useActions';
import {useTypedSelector} from '../../../../../../hooks/useTypedSelector';
import PartsItemCard from '../../../../../../components/PartsItemCard';
import Selection from '../../../../../../components/Select';
import {cars} from '../../../../../../assets/helpers/Cars/Active/CarsActive.helpers';

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
    if (loadingItem || partsItemList) return;
    partsItemAll();
  }, []);

  useEffect(() => {
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
        {PartsItemSearchHeaders.map(elem => (
          (elem.type === 'selection') ?
            <Selection key={elem.name} name={elem.name} values={cars} width={elem.width as number} />            :
            <Search key={elem.name} name={elem.name} width={elem.width as string} />
        ))}
      </SelectionStyled>
      <ItemStyled>
        <ItemsHeadStyled>
          {PartsItemHeaders.map((elem, index) => (
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
