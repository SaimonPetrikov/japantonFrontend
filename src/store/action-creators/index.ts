import * as authActionCreators from '../slices/Auth/authActionCreators';
import * as carActionCreators from '../slices/Cars/Active/activeActionCreators';
import * as partsActionCreators from '../slices/Cars/Parts/partsActionCreators';
import * as partsItemActionCreators from '../slices/Cars/PartsItem/partsItemActionCreators';
import * as providersActionCreators from '../slices/Cars/Providers/providersActionCreators';

export default {
  ...carActionCreators,
  ...authActionCreators,
  ...partsActionCreators,
  ...partsItemActionCreators,
  ...providersActionCreators
};
