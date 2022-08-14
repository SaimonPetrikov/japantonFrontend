import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {FC} from 'react';
import {useNavigate} from 'react-router-dom';

import {useActions} from '../../../hooks/useActions';
import {RouteNames} from '../../../routes/Routes/Routes.enum';
import {DeleteStyled, WrapStyled } from '../CarsCards.styles';

import {CardStyled} from './ProvidersCard.styles';
import {IProvidersCardProps} from './ProvidersCard.typings';


const ProvidersCard: FC<IProvidersCardProps> = ({providers}) => {
  const {providersShow} = useActions();
  const router = useNavigate();
  const {providersDelete} = useActions();

  const showCarHandler = () => {
    router(`${RouteNames.CARS_PROVIDERS_UPDATE}/${providers.id}`);
    providersShow(providers.id);
  };

  const deleteHandler = () => providersDelete(providers.id);

  return (
    <WrapStyled>
      <CardStyled onClick={showCarHandler}>
        <p>{providers.id}</p>
        <p>{providers.name}</p>
        <p>{providers.email}</p>
        <p>{providers.percent}</p>
      </CardStyled>
      <DeleteStyled>
        <DeleteOutlineIcon onClick={deleteHandler} />
      </DeleteStyled>
    </WrapStyled>
  );
};

export default ProvidersCard;
