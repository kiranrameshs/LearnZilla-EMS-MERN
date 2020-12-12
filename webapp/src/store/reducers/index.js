import { combineReducers } from 'redux';
import userReducer from './userReducer';
import courseReducers from './courseReducers';
import errorReducer from './errorReducer';
import gradeReducer from './gradeReducer';

const rootReducer =  combineReducers({
  user: userReducer,
  course: courseReducers,
  errors: errorReducer,
  grades: gradeReducer,

});

export default rootReducer;
