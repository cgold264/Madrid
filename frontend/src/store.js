// store.js
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import restaurantReducer from './reducers/restaurant';
import dataListsReducer from './reducers/dataLists';
// Import your reducers here (we'll create them in Step 4)

const rootReducer = combineReducers({
  // Combine your reducers here
  restaurant: restaurantReducer,
  dataLists: dataListsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
