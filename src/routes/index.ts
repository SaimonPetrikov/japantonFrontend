import Login from '../pages/Public/Login';
import Signup from '../pages/Public/Signup';
import CarsActive from '../pages/Private/SidebarMenu/Cars/Active';
import CarsArchive from '../pages/Private/SidebarMenu/Cars/Archive';
import CarsSuppliers from '../pages/Private/SidebarMenu/Cars/Suppliers';
import CarsCatalog from '../pages/Private/SidebarMenu/Cars/Catalog';
import CarsSpareParts from '../pages/Private/SidebarMenu/Cars/SpareParts';
import CarsSparePartsStructure from '../pages/Private/SidebarMenu/Cars/SparePartsStructure';
import CarsTypesOfSpareParts from '../pages/Private/SidebarMenu/Cars/TypesOfSpareParts';
import WheelsFirst from '../pages/Private/SidebarMenu/Wheels/Test1';
import WheelsSecond from '../pages/Private/SidebarMenu/Wheels/Test2';
import WheelsThird from '../pages/Private/SidebarMenu/Wheels/Test3';
import UsersFirst from '../pages/Private/SidebarMenu/Users/Test1';
import UsersSecond from '../pages/Private/SidebarMenu/Users/Test2';
import UsersThird from '../pages/Private/SidebarMenu/Users/Test3';
import ContainersFirst from '../pages/Private/SidebarMenu/Containers/Test1';
import ContainersSecond from '../pages/Private/SidebarMenu/Containers/Test2';
import ContainersThird from '../pages/Private/SidebarMenu/Containers/Test3';
import ShipmentsFirst from '../pages/Private/SidebarMenu/Shipments/Test1';
import ShipmentsSecond from '../pages/Private/SidebarMenu/Shipments/Test2';
import ShipmentsThird from '../pages/Private/SidebarMenu/Shipments/Test3';
import BalanceFirst from '../pages/Private/SidebarMenu/Balance/Test1';
import BalanceSecond from '../pages/Private/SidebarMenu/Balance/Test2';
import BalanceThird from '../pages/Private/SidebarMenu/Balance/Test3';
import AccessFirst from '../pages/Private/SidebarMenu/Access/Test1';
import AccessSecond from '../pages/Private/SidebarMenu/Access/Test2';
import AccessThird from '../pages/Private/SidebarMenu/Access/Test3';
import RetailFirst from '../pages/Private/SidebarMenu/Retail/Test1';
import RetailSecond from '../pages/Private/SidebarMenu/Retail/Test2';
import RetailThird from '../pages/Private/SidebarMenu/Retail/Test3';
import CarsCreate from '../pages/Private/SidebarMenu/Cars/Create';
import CarItem from '../pages/Private/SidebarMenu/Cars/CarItem';
import CarItemUpdate from '../pages/Private/SidebarMenu/Cars/CarItemUpdate';

import {RouteNames} from './Routes/Routes.enum';
import {IRouteProps} from './Routes/Routes.typings';

export const publicRoutes: IRouteProps[] = [
  {path: RouteNames.LOGIN, element: Login},
  {path: RouteNames.SIGNUP, element: Signup}
];

export const privateRoutes: IRouteProps[] = [
  {path: RouteNames.CARS_ACTIVE, element: CarsActive},
  {path: RouteNames.CARS_CREATE, element: CarsCreate},
  {path: RouteNames.CARS_ITEM, element: CarItem},
  {path: RouteNames.CARS_UPDATE, element: CarItemUpdate},
  {path: RouteNames.CARS_ARCHIVE, element: CarsArchive},
  {path: RouteNames.CARS_TYPES_OF_SPARE_PARTS, element: CarsTypesOfSpareParts},
  {path: RouteNames.CARS_SPARE_PARTS, element: CarsSpareParts},
  {path: RouteNames.CARS_SPARE_PARTS_STRUCTURE, element: CarsSparePartsStructure},
  {path: RouteNames.CARS_CATALOG, element: CarsCatalog},
  {path: RouteNames.CARS_SUPPLIERS, element: CarsSuppliers},
  {path: RouteNames.WHEELS1, element: WheelsFirst},
  {path: RouteNames.WHEELS2, element: WheelsSecond},
  {path: RouteNames.WHEELS3, element: WheelsThird},
  {path: RouteNames.USERS1, element: UsersFirst},
  {path: RouteNames.USERS2, element: UsersSecond},
  {path: RouteNames.USERS3, element: UsersThird},
  {path: RouteNames.CONTAINERS1, element: ContainersFirst},
  {path: RouteNames.CONTAINERS2, element: ContainersSecond},
  {path: RouteNames.CONTAINERS3, element: ContainersThird},
  {path: RouteNames.SHIPMENTS1, element: ShipmentsFirst},
  {path: RouteNames.SHIPMENTS2, element: ShipmentsSecond},
  {path: RouteNames.SHIPMENTS3, element: ShipmentsThird},
  {path: RouteNames.BALANCE1, element: BalanceFirst},
  {path: RouteNames.BALANCE2, element: BalanceSecond},
  {path: RouteNames.BALANCE3, element: BalanceThird},
  {path: RouteNames.ACCESS1, element: AccessFirst},
  {path: RouteNames.ACCESS2, element: AccessSecond},
  {path: RouteNames.ACCESS3, element: AccessThird},
  {path: RouteNames.RETAIL1, element: RetailFirst},
  {path: RouteNames.RETAIL2, element: RetailSecond},
  {path: RouteNames.RETAIL3, element: RetailThird},
];
