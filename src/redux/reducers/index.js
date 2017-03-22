import { combineReducers, createStore, applyMiddleware } from 'redux';

import ReduxPromise from 'redux-promise';
import WeatherReducer from './reducer.weather';

const rootReducer = combineReducers({
    weather: WeatherReducer
});

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default createStoreWithMiddleware(rootReducer);