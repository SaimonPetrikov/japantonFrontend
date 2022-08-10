import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import {FC} from 'react';
import {useNavigate} from 'react-router-dom';

import {useActions} from '../../hooks/useActions';
import {RouteNames} from '../../routes/Routes/Routes.enum';

import {BtnsStyled, CardStyled} from './PartsItemCard.styles';
import {IPartsCardProps} from './PartsItemCard.typings';


const PartsItemCard: FC<IPartsCardProps> = ({parts}) => {
  const {partsShow} = useActions();
  const router = useNavigate();
  const {partsDelete} = useActions();

  const showCarHandler = () => {
    router(`${RouteNames.CARS_PARTS_UPDATE}/${parts.id}`);
    partsShow(parts.id);
  };

  const deleteHandler = () => partsDelete(parts.id);

  return (
    <CardStyled onClick={showCarHandler}>
      <p>{parts.id}</p>
      <p>{parts.name_ru}</p>
      <p>{parts.name_en}</p>
      <p>Air  conditioner</p>
      <p>{parts.sort}</p>
      <p>В наличии</p>
      <p>3 кг</p>
      <p>2500 JPY</p>
      <BtnsStyled>
        <ArchiveOutlinedIcon />
        <DeleteOutlineIcon onClick={deleteHandler} />
      </BtnsStyled>
    </CardStyled>
  );
};

export default PartsItemCard;
