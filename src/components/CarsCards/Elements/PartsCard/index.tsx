import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {FC} from 'react';
import {useNavigate} from 'react-router-dom';

import {useActions} from '../../../../hooks/useActions';
import {RouteNames} from '../../../../routes/Routes/Routes.enum';
import {CardStyled, DeleteStyled, WrapStyled } from '../../CarsCards.styles';

import {PartsCardProps} from './PartsCard.typings';


const PartsCard: FC<PartsCardProps> = ({part}) => {
  const {partsShow} = useActions();
  const router = useNavigate();
  const {partsDelete} = useActions();

  const showCarHandler = () => {
    router(`${RouteNames.CARS_PARTS_UPDATE}/${part.id}`);
    partsShow(part.id);
  };

  const deleteHandler = () => partsDelete(part.id);

  return (
    <WrapStyled>
      <CardStyled gap={'30px'} padding={'20px 25px'} gridTemplateColumns={'40px 430px 430px 200px'} onClick={showCarHandler}>
        <p>{part.id}</p>
        <p>{part.name_ru}</p>
        <p>{part.name_en}</p>
        <p>{part.sticker_fields}</p>
      </CardStyled>
      <DeleteStyled>
        <DeleteOutlineIcon onClick={deleteHandler} />
      </DeleteStyled>
    </WrapStyled>
  );
};

export default PartsCard;
