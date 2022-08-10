import $api from '../../http';
import {
  PartsItemAllResponse, PartsItemChangedResponse,
  PartsItemSingleResponse
} from '../../store/slices/Cars/PartsItem/partsItemActionCreators/partsItem.typings';


const PartsItemService = {
  all: () => $api.get<PartsItemAllResponse>('/part-item'),
  single: data => $api.get<PartsItemSingleResponse>(`part-item/show/${data}`),
  create: data => $api.post<PartsItemSingleResponse>('/part-item/create', data),
  update: data => $api.post<PartsItemChangedResponse>(`/part-item/update/${data.id}`, data.updateData),
  delete: data => $api.get<PartsItemChangedResponse>(`/part-item/delete/${data}`),
};

export default PartsItemService;
