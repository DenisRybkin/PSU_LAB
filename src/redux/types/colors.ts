import {ColorsInterface} from "../../pages/Home/Colors.interface";

export interface ColorsState {
    isLoaded : boolean,
    data : ColorsInterface;
}

export enum ColorsActionsTypes {
    SET_COLORS = 'SET_COLORS',
}

export interface SetColorsAction {
    type : ColorsActionsTypes.SET_COLORS,
    payload : ColorsInterface,
}