import { combineReducers } from 'redux';
import userReducer from './userReducer';
import errorReducer from './errorReducer';
import gradeReducer from './gradeReducer';

const rootReducer =  combineReducers({
  user: userReducer,
  errors: errorReducer,
  grades: gradeReducer
});

export default rootReducer;
