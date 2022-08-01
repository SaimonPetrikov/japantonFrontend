import * as AuthActionCreators from './auth';
import * as CarActionCreators from './cars';

export default {
  ...AuthActionCreators,
  ...CarActionCreators
};
