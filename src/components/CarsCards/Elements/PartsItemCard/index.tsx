import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {FC} from 'react';
import {useNavigate} from 'react-router-dom';

import {useActions} from '../../../../hooks/useActions';
import {RouteNames} from '../../../../routes/Routes/Routes.enum';
import {CardStyled, DeleteStyled, WrapStyled } from '../../CarsCards.styles';

import {PartsItemCardProps} from './PartsItemCard.typings';


const PartsItemCard: FC<PartsItemCardProps> = ({partItem}) => {
  const {partsItemShow} = useActions();
  const router = useNavigate();
  const {partsItemDelete} = useActions();

  const showCarHandler = () => {
    router(`${RouteNames.CARS_PARTS_ITEM_UPDATE}/${partItem.id}`);
    partsItemShow(partItem.id);
  };

  const deleteHandler = () => partsItemDelete(partItem.id);

  return (
    <WrapStyled>
      <CardStyled gap={'25px'} padding={'20px 20px'} gridTemplateColumns={'25px 190px 210px 210px 70px 133px 73px 124px'} onClick={showCarHandler}>
        <p>{partItem.id}</p>
        <p>{partItem.name_ru}</p>
        <p>{partItem.name_en}</p>
        <p>{partItem.name_jp}</p>
        <p>{partItem.sort}</p>
        <p>{partItem.code}</p>
        <p>{partItem.weight} кг</p>
        <p>{partItem.price} JPY</p>
      </CardStyled>
      <DeleteStyled>
        <DeleteOutlineIcon onClick={deleteHandler} />
      </DeleteStyled>
    </WrapStyled>
  );
};

export default PartsItemCard;
