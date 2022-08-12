import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import {FC} from 'react';
import {useNavigate} from 'react-router-dom';

import {useActions} from '../../hooks/useActions';
import {RouteNames} from '../../routes/Routes/Routes.enum';

import {BtnsStyled, CardStyled} from './PartsItemCard.styles';
import {IPartsItemCardProps} from './PartsItemCard.typings';


const PartsItemCard: FC<IPartsItemCardProps> = ({partsItem}) => {
  const {partsItemShow} = useActions();
  const router = useNavigate();
  const {partsItemDelete} = useActions();

  const showCarHandler = () => {
    router(`${RouteNames.CARS_PARTS_ITEM_UPDATE}/${partsItem.id}`);
    partsItemShow(partsItem.id);
  };

  const deleteHandler = () => partsItemDelete(partsItem.id);

  return (
    <CardStyled onClick={showCarHandler}>
      <p>{partsItem.id}</p>
      <p>{partsItem.name_ru}</p>
      <p>{partsItem.name_en}</p>
      <p>{partsItem.name_en}</p>
      <p>{partsItem.sort}</p>
      <p>{partsItem.code}</p>
      <p>{partsItem.weight} кг</p>
      <p>{partsItem.price} JPY</p>
      <BtnsStyled>
        <ArchiveOutlinedIcon />
        <DeleteOutlineIcon onClick={deleteHandler} />
      </BtnsStyled>
    </CardStyled>
  );
};

export default PartsItemCard;
