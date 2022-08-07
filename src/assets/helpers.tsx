import {BottomLevelCategory, TopLevelCategory} from '../components/Menu/Menu.typings';

import { ReactComponent as CarsIcon } from './icons/Menu/Menu.icons/Cars.svg';
import { ReactComponent as WheelsIcon } from './icons/Menu/Menu.icons/Wheels.svg';
import { ReactComponent as UsersIcon } from './icons/Menu/Menu.icons/Users.svg';
import { ReactComponent as ContainersIcon } from './icons/Menu/Menu.icons/Containers.svg';
import { ReactComponent as ShipmentsIcon } from './icons/Menu/Menu.icons/Shipments.svg';
import { ReactComponent as BalanceIcon } from './icons/Menu/Menu.icons/Balance.svg';
import { ReactComponent as AccessIcon } from './icons/Menu/Menu.icons/Access.svg';
import { ReactComponent as RetailIcon } from './icons/Menu/Menu.icons/Retail.svg';
import { ReactComponent as SecondLevelIcon } from './icons/Menu/Menu.icons/SeconLevel.svg';

const secondLvlCars = [
  { route: 'cars/active', name: 'Активные', icon: <SecondLevelIcon />, id: BottomLevelCategory.Cars_active },
  { route: 'cars/archive', name: 'Архив', icon: <SecondLevelIcon />, id: BottomLevelCategory.Cars_archive },
  { route: 'cars/parts_types', name: 'Типы запчастей', icon: <SecondLevelIcon />, id: BottomLevelCategory.Cars_parts_types },
  { route: '/cars/parts/all', name: 'Запчасти', icon: <SecondLevelIcon />, id: BottomLevelCategory.Cars_parts },
  { route: 'cars/parts_structure', name: 'Струтура запчастей', icon: <SecondLevelIcon />, id: BottomLevelCategory.Cars_parts_structure },
  { route: 'cars/catalog', name: 'Каталог', icon: <SecondLevelIcon />, id: BottomLevelCategory.Cars_catalog },
  { route: 'cars/suppliers', name: 'Поставщики', icon: <SecondLevelIcon />, id: BottomLevelCategory.Cars_suppliers }
];

const secondLvlWheels = [
  { route: 'wheels/test_wheels1', name: '2lvl Колеса1', icon: <SecondLevelIcon />, id: BottomLevelCategory.Wheels1 },
  { route: 'wheels/test_wheels2', name: '2lvl Колеса2', icon: <SecondLevelIcon />, id: BottomLevelCategory.Wheels2 },
  { route: 'wheels/test_wheels3', name: '2lvl Колеса3', icon: <SecondLevelIcon />, id: BottomLevelCategory.Wheels3 }
];

const secondLvlUsers = [
  { route: 'users/test_users1', name: '2lvl Пользователи1', icon: <SecondLevelIcon />, id: BottomLevelCategory.Users1 },
  { route: 'users/test_users2', name: '2lvl Пользователи2', icon: <SecondLevelIcon />, id: BottomLevelCategory.Users2 },
  { route: 'users/test_users3', name: '2lvl Пользователи3', icon: <SecondLevelIcon />, id: BottomLevelCategory.Users3 }
];

const secondLvlContainers = [
  { route: 'containers/test_containers1', name: '2lvl Контейнеры1', icon: <SecondLevelIcon />, id: BottomLevelCategory.Containers1 },
  { route: 'containers/test_containers2', name: '2lvl Контейнеры2', icon: <SecondLevelIcon />, id: BottomLevelCategory.Containers2 },
  { route: 'containers/test_containers3', name: '2lvl Контейнеры3', icon: <SecondLevelIcon />, id: BottomLevelCategory.Containers3 }
];

const secondLvlShipments = [
  { route: 'shipments/test_shipments1', name: '2lvl Отправки1', icon: <SecondLevelIcon />, id: BottomLevelCategory.Shipments1 },
  { route: 'shipments/test_shipments2', name: '2lvl Отправки2', icon: <SecondLevelIcon />, id: BottomLevelCategory.Shipments2 },
  { route: 'shipments/test_shipments3', name: '2lvl Отправки3', icon: <SecondLevelIcon />, id: BottomLevelCategory.Shipments3 }
];

const secondLvlBalance = [
  { route: 'balance/test_balance1', name: '2lvl Баланс1', icon: <SecondLevelIcon />, id: BottomLevelCategory.Balance1 },
  { route: 'balance/test_balance2', name: '2lvl Баланс2', icon: <SecondLevelIcon />, id: BottomLevelCategory.Balance2 },
  { route: 'balance/test_balance3', name: '2lvl Баланс3', icon: <SecondLevelIcon />, id: BottomLevelCategory.Balance3 }
];

const secondLvlAccess = [
  { route: 'access/test_access1', name: '2lvl Доступ1', icon: <SecondLevelIcon />, id: BottomLevelCategory.Access1 },
  { route: 'access/test_access2', name: '2lvl Доступ2', icon: <SecondLevelIcon />, id: BottomLevelCategory.Access2 },
  { route: 'access/test_access3', name: '2lvl Доступ3', icon: <SecondLevelIcon />, id: BottomLevelCategory.Access3 }
];

const secondLvlRetail = [
  { route: 'retail/test_retail1', name: '2lvl Розница1', icon: <SecondLevelIcon />, id: BottomLevelCategory.Retail1 },
  { route: 'retail/test_retail2', name: '2lvl Розница2', icon: <SecondLevelIcon />, id: BottomLevelCategory.Retail2 },
  { route: 'retail/test_retail3', name: '2lvl Розница3', icon: <SecondLevelIcon />, id: BottomLevelCategory.Retail3 }
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
