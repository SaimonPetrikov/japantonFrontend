import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {FC} from 'react';
import {useNavigate} from 'react-router-dom';

import {useActions} from '../../../../hooks/useActions';
import {RouteNames} from '../../../../routes/Routes/Routes.enum';
import {CardStyled, DeleteStyled, WrapStyled } from '../../CarsCards.styles';

import {ProvidersCardProps} from './ProvidersCard.typings';


const ProvidersCard: FC<ProvidersCardProps> = ({provider}) => {
  const {providersShow} = useActions();
  const router = useNavigate();
  const {providersDelete} = useActions();

  const showCarHandler = () => {
    router(`${RouteNames.CARS_PROVIDERS_UPDATE}/${provider.id}`);
    providersShow(provider.id);
  };

  const deleteHandler = () => providersDelete(provider.id);

  return (
    <WrapStyled>
      <CardStyled gap={'25px'} padding={'20px 20px'} gridTemplateColumns={'55px 345px 355px 380px'} onClick={showCarHandler}>
        <p>{provider.id}</p>
        <p>{provider.name}</p>
        <p>{provider.email}</p>
        <p>{provider.percent}</p>
      </CardStyled>
      <DeleteStyled>
        <DeleteOutlineIcon onClick={deleteHandler} />
      </DeleteStyled>
    </WrapStyled>
  );
};

export default ProvidersCard;
