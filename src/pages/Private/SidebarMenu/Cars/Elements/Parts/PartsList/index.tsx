import {useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import HeaderPage from '../../../../../../../ui/HeaderPage';
import Search from '../../../../../../../components/Search';
import {PartsHeaders, PartsSearchHeaders} from '../../../../../../../assets/helpers/Cars/Parts/PartsList.helpers';
import {useActions} from '../../../../../../../hooks/useActions';
import {useTypedSelector} from '../../../../../../../hooks/useTypedSelector';
import PartsCard from '../../../../../../../components/CarsCards/Elements/PartsCard';
import {HeadersStyled, ItemCardStyled, ItemsHeadStyled, ItemStyled, SelectionStyled, SeparateLineStyled } from '../../../Cars.styles';


const CarsPart = () => {
  const {partsAll} = useActions();
  const {loading, partsList, isChanged} = useTypedSelector(state => state.parts);

  useEffect(() => {
    if (loading || partsList) return;
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
            <PartsCard key={elem.id} part={partsList.part[index]}/>
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
      <HeaderPage>Типы запчастей</HeaderPage>
      <SelectionStyled>
        <Search name={PartsSearchHeaders[0]} width={'490px'} />
        <Search name={PartsSearchHeaders[1]} width={'490px'} />
      </SelectionStyled>
      <ItemStyled>
        <ItemsHeadStyled gridTemplateColumns={'69px 461px 459px 230px auto'}>
          {PartsHeaders.map((elem, index) => (
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
