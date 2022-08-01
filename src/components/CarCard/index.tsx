import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import {FC} from 'react';

import CarIcon from '../../assets/icons/Pages/CarsActive.icons/carIcon.png';
import {useActions} from '../../hooks/useActions';

import {ArchiveStyled, CarCardStyled, DeleteStyled, PStyled} from './CarCard.styles';
import {ILoadingButtonProps} from './CarCard.typings';


const CarCard: FC<ILoadingButtonProps> = ({cars}) => {
  const {carDelete} = useActions();

  const deleteHandler = () => {
    carDelete(cars.id);
  };

  return (
    <CarCardStyled>
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
