export enum InputActionsTypes {
    SET_TITLE = 'SET_TITLE',
    SET_SUBTITLE = 'SET_SUBTITLE',
    SET_DEPARTMENT = 'SET_DEPARTMENT',
    SET_DESCRIPTION_TITLE = 'SET_DESCRIPTION_TITLE',
    SET_DESCRIPTION_ABOUT = 'SET_DESCRIPTION_ABOUT',
    SET_DESCRIPTION_OPTION = 'SET_DESCRIPTION_OPTION',
    SET_AUTHORS_PERSON_DESCRIPTION = 'SET_AUTHORS_PERSON_DESCRIPTION',
    SET_AUTHORS_FIRST_PERSON = 'SET_AUTHORS_FIRST_PERSON',
    SET_AUTHORS_SECOND_PERSON = 'SET_AUTHORS_SECOND_PERSON',
    SET_REVIEWERS_PERSON = 'SET_REVIEWERS_PERSON',
    SET_FOOTER = 'SET_FOOTER',
}
export interface ActionInterface{
    type : string,
    payload : InputState,
}
export interface InputState {
    text : string,
    color : string;
}
export interface SetTitleAction {
    type : InputActionsTypes.SET_TITLE,
    payload : InputState,
}
export interface SetSubtitleAction {
    type : InputActionsTypes.SET_SUBTITLE,
    payload : InputState,
}
export interface SetDepartmentAction {
    type : InputActionsTypes.SET_DEPARTMENT,
    payload : InputState,
}
export interface SetDescriptionTitleAction {
    type : InputActionsTypes.SET_DESCRIPTION_TITLE,
    payload : InputState,
}
export interface SetDescriptionAboutAction {
    type : InputActionsTypes.SET_DESCRIPTION_ABOUT,
    payload : SetTitleAction,
}
export interface SetDescriptionOptionAction {
    type : InputActionsTypes.SET_DESCRIPTION_OPTION,
    payload : InputState,
}
export interface SetAuthorPersonDescriptionAction {
    type : InputActionsTypes.SET_AUTHORS_PERSON_DESCRIPTION,
    payload : InputState,
}
export interface SetAuthorFirstPersonAction {
    type : InputActionsTypes.SET_AUTHORS_FIRST_PERSON,
    payload : InputState,
}
export interface SetAuthorFirstPersonAction {
    type : InputActionsTypes.SET_AUTHORS_FIRST_PERSON,
    payload : InputState,
}
export interface SetAuthorSecondPersonAction {
    type : InputActionsTypes.SET_AUTHORS_SECOND_PERSON,
    payload : InputState,
}
export interface SetReviewsPersonAction {
    type : InputActionsTypes.SET_REVIEWERS_PERSON,
    payload : InputState,
}
export interface SetFooterAction {
    type : InputActionsTypes.SET_FOOTER,
    payload : InputState,
}