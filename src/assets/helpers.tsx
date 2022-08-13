import {BottomLevelCategory, TopLevelCategory} from '../components/Menu/Menu.typings';
import {RouteNames} from '../routes/Routes/Routes.enum';

import {ReactComponent as CarsIcon} from './icons/Menu/Menu.icons/Cars.svg';
import {ReactComponent as WheelsIcon} from './icons/Menu/Menu.icons/Wheels.svg';
import {ReactComponent as UsersIcon} from './icons/Menu/Menu.icons/Users.svg';
import {ReactComponent as ContainersIcon} from './icons/Menu/Menu.icons/Containers.svg';
import {ReactComponent as ShipmentsIcon} from './icons/Menu/Menu.icons/Shipments.svg';
import {ReactComponent as BalanceIcon} from './icons/Menu/Menu.icons/Balance.svg';
import {ReactComponent as AccessIcon} from './icons/Menu/Menu.icons/Access.svg';
import {ReactComponent as RetailIcon} from './icons/Menu/Menu.icons/Retail.svg';
import {ReactComponent as SecondLevelIcon} from './icons/Menu/Menu.icons/SeconLevel.svg';

const secondLvlCars = [
  { route: RouteNames.CARS_ACTIVE, name: 'Активные', icon: <SecondLevelIcon />, id: BottomLevelCategory.Cars_active },
  { route: RouteNames.CARS_ARCHIVE, name: 'Архив', icon: <SecondLevelIcon />, id: BottomLevelCategory.Cars_archive },
  { route: RouteNames.CARS_PARTS, name: 'Типы запчастей', icon: <SecondLevelIcon />, id: BottomLevelCategory.Cars_parts_item },
  { route: RouteNames.CARS_PARTS_ITEM, name: 'Запчасти', icon: <SecondLevelIcon />, id: BottomLevelCategory.Cars_parts },
  { route: RouteNames.CARS_PARTS_STRUCTURE, name: 'Струтура запчастей', icon: <SecondLevelIcon />, id: BottomLevelCategory.Cars_parts_structure },
  { route: RouteNames.CARS_CATALOG, name: 'Каталог', icon: <SecondLevelIcon />, id: BottomLevelCategory.Cars_catalog },
  { route: RouteNames.CARS_PROVIDERS, name: 'Поставщики', icon: <SecondLevelIcon />, id: BottomLevelCategory.Cars_suppliers }
];

const secondLvlWheels = [
  { route: RouteNames.WHEELS1, name: '2lvl Колеса1', icon: <SecondLevelIcon />, id: BottomLevelCategory.Wheels1 },
  { route: RouteNames.WHEELS2, name: '2lvl Колеса2', icon: <SecondLevelIcon />, id: BottomLevelCategory.Wheels2 },
  { route: RouteNames.WHEELS3, name: '2lvl Колеса3', icon: <SecondLevelIcon />, id: BottomLevelCategory.Wheels3 }
];

const secondLvlUsers = [
  { route: RouteNames.USERS1, name: '2lvl Пользователи1', icon: <SecondLevelIcon />, id: BottomLevelCategory.Users1 },
  { route: RouteNames.USERS2, name: '2lvl Пользователи2', icon: <SecondLevelIcon />, id: BottomLevelCategory.Users2 },
  { route: RouteNames.USERS3, name: '2lvl Пользователи3', icon: <SecondLevelIcon />, id: BottomLevelCategory.Users3 }
];

const secondLvlContainers = [
  { route: RouteNames.CONTAINERS1, name: '2lvl Контейнеры1', icon: <SecondLevelIcon />, id: BottomLevelCategory.Containers1 },
  { route: RouteNames.CONTAINERS2, name: '2lvl Контейнеры2', icon: <SecondLevelIcon />, id: BottomLevelCategory.Containers2 },
  { route: RouteNames.CONTAINERS3, name: '2lvl Контейнеры3', icon: <SecondLevelIcon />, id: BottomLevelCategory.Containers3 }
];

const secondLvlShipments = [
  { route: RouteNames.SHIPMENTS1, name: '2lvl Отправки1', icon: <SecondLevelIcon />, id: BottomLevelCategory.Shipments1 },
  { route: RouteNames.SHIPMENTS2, name: '2lvl Отправки2', icon: <SecondLevelIcon />, id: BottomLevelCategory.Shipments2 },
  { route: RouteNames.SHIPMENTS3, name: '2lvl Отправки3', icon: <SecondLevelIcon />, id: BottomLevelCategory.Shipments3 }
];

const secondLvlBalance = [
  { route: RouteNames.BALANCE1, name: '2lvl Баланс1', icon: <SecondLevelIcon />, id: BottomLevelCategory.Balance1 },
  { route: RouteNames.BALANCE2, name: '2lvl Баланс2', icon: <SecondLevelIcon />, id: BottomLevelCategory.Balance2 },
  { route: RouteNames.BALANCE3, name: '2lvl Баланс3', icon: <SecondLevelIcon />, id: BottomLevelCategory.Balance3 }
];

const secondLvlAccess = [
  { route: RouteNames.ACCESS1, name: '2lvl Доступ1', icon: <SecondLevelIcon />, id: BottomLevelCategory.Access1 },
  { route: RouteNames.ACCESS2, name: '2lvl Доступ2', icon: <SecondLevelIcon />, id: BottomLevelCategory.Access2 },
  { route: RouteNames.ACCESS3, name: '2lvl Доступ3', icon: <SecondLevelIcon />, id: BottomLevelCategory.Access3 }
];

const secondLvlRetail = [
  { route: RouteNames.RETAIL1, name: '2lvl Розница1', icon: <SecondLevelIcon />, id: BottomLevelCategory.Retail1 },
  { route: RouteNames.RETAIL2, name: '2lvl Розница2', icon: <SecondLevelIcon />, id: BottomLevelCategory.Retail2 },
  { route: RouteNames.RETAIL3, name: '2lvl Розница3', icon: <SecondLevelIcon />, id: BottomLevelCategory.Retail3 }
];


const firstLevelMenu = [
  { name: 'Машины', icon: <CarsIcon />, id: TopLevelCategory.Cars, secondLvl: secondLvlCars, isOpen: true },
  { name: 'Колеса', icon: <WheelsIcon />, id: TopLevelCategory.Wheels, secondLvl: secondLvlWheels, isOpen: false },
  { name: 'Пользователи', icon: <UsersIcon />, id: TopLevelCategory.Users, secondLvl: secondLvlUsers, isOpen: false },
  { name: 'Контейнеры', icon: <ContainersIcon />, id: TopLevelCategory.Containers, secondLvl: secondLvlContainers, isOpen: false },
  { name: 'Отправки', icon: <ShipmentsIcon />, id: TopLevelCategory.Shipments, secondLvl: secondLvlShipments, isOpen: false },
  { name: 'Баланс', icon: <BalanceIcon />, id: TopLevelCategory.Balance, secondLvl: secondLvlBalance, isOpen: false },
  { name: 'Доступ', icon: <AccessIcon />, id: TopLevelCategory.Access, secondLvl: secondLvlAccess, isOpen: false },
  { name: 'Розница', icon: <RetailIcon />, id: TopLevelCategory.Retail, secondLvl: secondLvlRetail, isOpen: false }
];

export default firstLevelMenu;
