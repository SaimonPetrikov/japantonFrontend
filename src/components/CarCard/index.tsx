import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import {FC} from 'react';
import {useNavigate} from 'react-router-dom';

import CarIcon from '../../assets/icons/Pages/CarsActive.icons/carIcon.png';
import {useActions} from '../../hooks/useActions';
import {RouteNames} from '../../routes/Routes/Routes.enum';

import {ArchiveStyled, CarCardStyled, DeleteStyled, PStyled} from './CarCard.styles';
import {ICarCardProps} from './CarCard.typings';


const CarCard: FC<ICarCardProps> = ({cars}) => {
  const router = useNavigate();
  const {carDelete, carSingle} = useActions();

  const showCarHandler = () => {
    router(`${RouteNames.CARS_ITEM}/${cars.id}`);
    carSingle(cars.id);
  };

  const deleteHandler = () => carDelete(cars.id);

  return (
    <CarCardStyled onClick={showCarHandler}>
      <p>{cars.id}</p>
      <img src={CarIcon} alt="Car Icon"/>
      <div>
        <PStyled>Daihatsu Terios Kid</PStyled>
        <p>Кузов: {cars.body_no}</p>
        <p>Двигатель: {cars.engine_no}</p>
        <p>Пробег: {cars.in_the_way} км</p>
      </div>
      <p>User ID: {cars.user_id}</p>
      <p>Manager</p>
      <p>Не указан</p>
      <ArchiveStyled>
        <ArchiveOutlinedIcon />
      </ArchiveStyled>
      <DeleteStyled onClick={deleteHandler}>
        <DeleteOutlineIcon />
      </DeleteStyled>
    </CarCardStyled>
  );
};

export default CarCard;
