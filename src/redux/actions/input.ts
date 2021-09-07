import {InputState,
    InputActionsTypes,SetTitleAction} from '../types/data';
export interface ActionInterface{
    type : string,
    payload : InputState,
}

export const setTitle = (text : string, color : string) : SetTitleAction => ({
    type : InputActionsTypes.SET_TITLE,
    payload : {text,color},
});
export const SetSubtitle = (text : string, color : string):ActionInterface => ({
    type : InputActionsTypes.SET_SUBTITLE,
    payload : {text,color},
});
export const SetDepartment = (text : string, color : string):ActionInterface => ({
    type : InputActionsTypes.SET_DEPARTMENT,
    payload : {text,color},
});
export const SetDescriptionTitle = (text : string, color : string) :ActionInterface=> ({
    type : InputActionsTypes.SET_DESCRIPTION_TITLE,
    payload : {text,color},
});
export const SetDescriptionAbout = (text : string, color : string):ActionInterface => ({
    type : InputActionsTypes.SET_DESCRIPTION_ABOUT,
    payload : {text,color},
});
export const SetDescriptionOption = (text : string, color : string):ActionInterface => ({
    type : InputActionsTypes.SET_DESCRIPTION_OPTION,
    payload : {text,color},
});
export const SetAuthorsAction = (text : string, color : string) : ActionInterface => ({
    type : InputActionsTypes.SET_AUTHORS_ACTION,
    payload : {text, color}
})
export const SetAuthorFirstPerson = (text : string, color : string):ActionInterface => ({
    type : InputActionsTypes.SET_AUTHORS_FIRST_PERSON,
    payload : {text,color},
});
export const SetAuthorSecondPerson = (text : string, color : string):ActionInterface => ({
    type : InputActionsTypes.SET_AUTHORS_SECOND_PERSON,
    payload : {text,color},
});
export const SetReviewsFirstPerson = (text : string, color : string):ActionInterface => ({
    type : InputActionsTypes.SET_REVIEWERS_FIRST_PERSON,
    payload : {text,color},
});
export const SetReviewsSecondPerson = (text : string, color : string):ActionInterface => ({
    type : InputActionsTypes.SET_REVIEWERS_SECOND_PERSON,
    payload : {text,color},
});
export const SetReviewersAction = (text : string, color : string) : ActionInterface => ({
    type : InputActionsTypes.SET_REVIEWERS_ACTION,
    payload : {text, color}
})
export const SetFooter = (text : string, color : string):ActionInterface => ({
    type : InputActionsTypes.SET_FOOTER,
    payload : {text,color},
});