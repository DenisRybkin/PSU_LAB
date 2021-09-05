import {DataInterface} from "../../pages/Home/Data.interface";

export type DataAction = SetDateAction | SetLoadingAction;

export interface DateState {
    isLoaded : boolean,
    data : DataInterface;
}

export enum DataActionsTypes {
    SET_DATA = 'SET_DATA',
    SET_LOADING = 'SET_LOADING'
}

interface SetDateAction {
    type : DataActionsTypes.SET_DATA,
    payload : DataInterface,
}

interface SetLoadingAction {
    type : DataActionsTypes.SET_LOADING,
    payload : boolean,
}