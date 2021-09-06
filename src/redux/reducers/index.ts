import {combineReducers} from "redux";
import {input} from "./input";
import {fetchData} from './fetchData';
import {fetchColors} from "./fetchColors";

export const rootReducer = combineReducers({
    input,
    fetchData,
    fetchColors,
});

export type RootState = ReturnType<typeof rootReducer>