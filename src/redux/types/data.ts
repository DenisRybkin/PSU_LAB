import {DataInterface} from "../../pages/Home/Data.interface";

export type DataAction = SetDateAction |
    SetLoadingAction |
    SetSubtitleAction |
    SetTitleAction|
    SetDepartmentAction |
    SetDescriptionTitleAction |
    SetDescriptionAboutAction |
    SetDescriptionOptionAction |
    SetAuthorPersonDescriptionAction|
    SetAuthorFirstPersonAction|
    SetAuthorSecondPersonAction|
    SetReviewsSecondPersonAction|
    SetReviewsFirstPersonAction|
    SetFooterAction |
    SetAuthorsPersonActionAction |
    SetReviewsPersonActionAction;

export enum InputActionsTypes {
    SET_TITLE = 'SET_TITLE',
    SET_SUBTITLE = 'SET_SUBTITLE',
    SET_DEPARTMENT = 'SET_DEPARTMENT',
    SET_DESCRIPTION_TITLE = 'SET_DESCRIPTION_TITLE',
    SET_DESCRIPTION_ABOUT = 'SET_DESCRIPTION_ABOUT',
    SET_DESCRIPTION_OPTION = 'SET_DESCRIPTION_OPTION',
    SET_AUTHORS_ACTION = 'SET_AUTHORS_ACTION',
    SET_AUTHORS_PERSON_DESCRIPTION = 'SET_AUTHORS_PERSON_DESCRIPTION',
    SET_AUTHORS_FIRST_PERSON = 'SET_AUTHORS_FIRST_PERSON',
    SET_AUTHORS_SECOND_PERSON = 'SET_AUTHORS_SECOND_PERSON',
    SET_REVIEWERS_ACTION = 'SET_REVIEWERS_ACTION',
    SET_REVIEWERS_FIRST_PERSON = 'SET_REVIEWERS_FIRST_PERSON',
    SET_REVIEWERS_SECOND_PERSON = 'SET_REVIEWERS_PERSON',
    SET_FOOTER = 'SET_FOOTER',
}
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
    payload : InputState,
}
export interface SetDescriptionOptionAction {
    type : InputActionsTypes.SET_DESCRIPTION_OPTION,
    payload : InputState,
}
export interface SetAuthorPersonDescriptionAction {
    type : InputActionsTypes.SET_AUTHORS_PERSON_DESCRIPTION,
    payload : InputState,
}
export interface SetAuthorsPersonActionAction {
    type : InputActionsTypes.SET_AUTHORS_ACTION,
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
export interface SetReviewsFirstPersonAction {
    type : InputActionsTypes.SET_REVIEWERS_FIRST_PERSON,
    payload : InputState,
}
export interface SetReviewsSecondPersonAction {
    type : InputActionsTypes.SET_REVIEWERS_SECOND_PERSON,
    payload : InputState,
}
export interface SetReviewsPersonActionAction{
    type : InputActionsTypes.SET_REVIEWERS_ACTION,
    payload : InputState,
}
export interface SetFooterAction {
    type : InputActionsTypes.SET_FOOTER,
    payload : InputState,
}