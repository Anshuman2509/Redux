import counter from './counter';
import logged from './logged';

import {combineReducers} from 'redux';

let allReducers=combineReducers({log:logged,counter:counter});

export default allReducers;