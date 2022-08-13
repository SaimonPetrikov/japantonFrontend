import $api from '../../http';
import {
  ProvidersAllResponse, ProvidersChangedResponse,
  ProvidersSingleResponse
} from '../../store/slices/Cars/Providers/providersActionCreators/providers.typings';

const ProvidersService = {
  all: () => $api.get<ProvidersAllResponse>('/provider'),
  single: data => $api.get<ProvidersSingleResponse>(`provider/show/${data}`),
  create: data => $api.post<ProvidersSingleResponse>('/provider/create', data),
  update: data => $api.post<ProvidersChangedResponse>(`/provider/update/${data.id}`, data.updateData),
  delete: data => $api.get<ProvidersChangedResponse>(`/provider/delete/${data}`),
};

export default ProvidersService;
