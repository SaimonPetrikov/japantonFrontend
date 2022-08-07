import * as authActionCreators from '../slices/Auth/authActionCreators';
import * as carActionCreators from '../slices/Cars/Active/activeActionCreators';
import * as partsActionCreators from '../slices/Cars/Parts/partsActionCreators';

export default {
  ...carActionCreators,
  ...authActionCreators,
  ...partsActionCreators
};
