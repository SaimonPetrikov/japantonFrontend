import $api from '../../http';
import {
  PartsAllResponse,
  PartsChangedResponse,
  PartsSingleResponse
} from '../../store/slices/Cars/Parts/partsActionCreators/parts.typings';

const PartsService = {
  all: () => $api.get<PartsAllResponse>('/part'),
  single: data => $api.get<PartsSingleResponse>(`part/show/${data}`),
  create: data => $api.post<PartsSingleResponse>('/part/create', data),
  update: data => $api.post<PartsChangedResponse>(`/part/update/${data.id}`, data.updateData),
  delete: data => $api.get<PartsChangedResponse>(`/part/delete/${data}`),
};

export default PartsService;
