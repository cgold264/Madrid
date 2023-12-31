// store.js
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import restaurantReducer from './reducers/restaurant';
import dataListsReducer from './reducers/dataLists';
import userReducer from './reducers/user';
import popupsReducer from './reducers/popups';
import establishmentReducer from './reducers/establishment';
import currentPageReducer from './reducers/currentPage';
// Import your reducers here (we'll create them in Step 4)

const rootReducer = combineReducers({
  // Combine your reducers here
  restaurant: restaurantReducer,
  dataLists: dataListsReducer,
  user: userReducer,
  popups: popupsReducer,
  establishment: establishmentReducer,
  currentPage: currentPageReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
