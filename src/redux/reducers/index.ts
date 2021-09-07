import {combineReducers} from "redux";
import {fetchData} from './fetchData';
import {fetchColors} from "./fetchColors";

export const rootReducer = combineReducers({
    fetchData,
    fetchColors,
});

export type RootState = ReturnType<typeof rootReducer>