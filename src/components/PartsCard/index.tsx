import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import {FC} from 'react';
import {useNavigate} from 'react-router-dom';

import {useActions} from '../../hooks/useActions';
import {RouteNames} from '../../routes/Routes/Routes.enum';

import {CardStyled} from './PartsCard.styles';
import {IPartsCardProps} from './PartsCard.typings';


const PartsCard: FC<IPartsCardProps> = ({parts}) => {
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
      <p>{parts.sticker_fields}</p>
      <ArchiveOutlinedIcon />
      <DeleteOutlineIcon onClick={deleteHandler} />
    </CardStyled>
  );
};

export default PartsCard;
