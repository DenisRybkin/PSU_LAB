import {combineReducers} from "redux";
import {inputText} from "./inputText";
import {fetchData} from './fetchData';
import {fetchColors} from "./fetchColors";

export const rootReducer = combineReducers({
    inputText,
    fetchData,
    fetchColors,
});

export type RootState = ReturnType<typeof rootReducer>