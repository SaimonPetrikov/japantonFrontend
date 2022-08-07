import {ICarProps} from '../../../store/slices/Cars/Active/activeActionCreators/cars.typings';

export interface ISearchProps {
  payload?: ICarProps[],
  width: string,
  name: string
}
