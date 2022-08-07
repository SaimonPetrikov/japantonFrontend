import $api from '../../http';
import {CarResponse} from '../../store/slices/Cars/Active/activeActionCreators/cars.typings';

const CarService = {
  all: () => $api.get<CarResponse>('/car'),
  single: data => $api.get<CarResponse>(`car/show/${data}`),
  create: data => $api.post<CarResponse>('/car/create', data),
  update: data => $api.post<CarResponse>(`/car/update/${data.id}`, data.updateData),
  delete: data => $api.get<CarResponse>(`/car/delete/${data}`),
};

export default CarService;
