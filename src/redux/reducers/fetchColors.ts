import produce from 'immer';
import {SetColorsAction,ColorsActionsTypes} from "../types/colors";

const initialState  = {
    isLoaded : false,
    colors : {colors: [
            {
                id: 1,
                hex: "#C9D1D3",
                name: "grey"
            },
            {
                id: 2,
                hex: "#42B883",
                name: "green"
            },
            {
                id: 3,
                hex: "#64C4ED",
                name: "blue"
            },
            {
                id: 4,
                hex: "#FFBBCC",
                name: "pink"
            },
            {
                id: 5,
                hex: "#7fffd4",
                name: "aquamarine"
            },
            {
                id: 6,
                hex: "#C355F5",
                name: "purple"
            },
            {
                id: 7,
                hex: "#110133",
                name: "black"
            },
            {
                id: 8,
                hex: "#FF6464",
                name: "red"
            }
        ]},
}

export const fetchColors = (state= initialState, action : SetColorsAction) => {
    return  produce(state, draft => {
        switch (action.type) {
            case ColorsActionsTypes.SET_COLORS:
                draft.colors = initialState.colors;
                draft.isLoaded = true;
                break;
            default :
                return state;
        }
    })
}