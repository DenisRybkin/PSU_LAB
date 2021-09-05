import produce from 'immer';

const initialState = {
    text : ""
};

export const inputText = (state = initialState, action : any) => {
    return produce(state, draft => {
        switch (action.type) {
            case "CHANGE_INPUT_TEXT" :
                draft.text = action.payload;
        }
    })
}