import {useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import HeaderPage from '../../../../../../ui/HeaderPage';
import Search from '../../../../../../components/Search';
import {useActions} from '../../../../../../hooks/useActions';
import {useTypedSelector} from '../../../../../../hooks/useTypedSelector';
import {
  ProvidersHeaders,
  ProvidersSearchHeaders, ProvidersSelection
} from '../../../../../../assets/helpers/Cars/Providers/ParovidersList.helpers';
import {cars} from '../../../../../../assets/helpers/Cars/Active/CarsActive.helpers';
import Selection from '../../../../../../components/Select';
import ProvidersCard from '../../../../../../components/ProvidersCard';

import {
  HeadersStyled,
  HeaderStyled, ItemCardStyled,
  ItemsHeadStyled,
  ItemStyled,
  SelectionStyled, SeparateLineStyled
} from './ProvidersList.styles';

const CarsProvidersList = () => {
  const {providersAll} = useActions();
  const {loadingProviders, providersList, isProvidersChanged} = useTypedSelector(state => state.providers);

  useEffect(() => {
    if (loadingProviders || providersList) return;
    providersAll();
  }, []);

  useEffect(() => {
    if (isProvidersChanged) providersAll();
  }, [isProvidersChanged]);

  // useEffect(() => {
  //   if (loading || !data) return;
  //   if (data.constructor === Array) setItems(data.filter((_, index) => index + 1 < 12));
  // }, [loading]);

  const nextHandler = () => null;

  const itemsList = () => {
    if (!providersList) return;
    if (providersList.provider.length !== 0) {
      return (
        <InfiniteScroll
          dataLength={providersList.provider.length}
          next={nextHandler}
          hasMore={true}
          loader={<h2>Loading...</h2>}
        >
          {providersList.provider.map((elem, index) => (
            <ProvidersCard key={elem.id} providers={providersList.provider[index]}/>
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
        <HeaderPage>Поставщики</HeaderPage>
      </HeaderStyled>
      <SelectionStyled>
        <Search name={ProvidersSearchHeaders} width={'962px'} />
        <Selection name={ProvidersSelection} values={cars} width={130} />
      </SelectionStyled>
      <ItemStyled>
        <ItemsHeadStyled>
          {ProvidersHeaders.map((elem, index) => (
            <ItemCardStyled key={elem}>
              {(index !== 0) && <SeparateLineStyled></SeparateLineStyled>}
              <HeadersStyled>
                {elem}
              </HeadersStyled>
            </ItemCardStyled>
          ))}
        </ItemsHeadStyled>
        {loadingProviders ? <h1>Загрузка...</h1> :
          itemsList()
        }
      </ItemStyled>
    </>
  );
};

export default CarsProvidersList;
