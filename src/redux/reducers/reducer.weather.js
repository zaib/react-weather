import {FEATCH_WEATHER} from '../constants';

export default function(state = [], action) {
    switch(action.type) {
        case FEATCH_WEATHER: 
            return [action.payload.data, ...state];
        default:
            return state
    }
}