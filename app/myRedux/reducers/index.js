

import { combineReducers } from 'redux';
import {tabbarReducer} from './KJTable_reducer';

export default combineReducers({
  tabbarSelecte:tabbarReducer,
});
