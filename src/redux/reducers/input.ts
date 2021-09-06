import produce from 'immer';
import {InputActionsTypes,ActionInterface} from "../types/input";

const initialState = {
    title : {text : "министерство науки и высшего образования рф", color:'black'},
    subtitle : {text : "пензенский государственный университет", color:'black'},
    department : {text : "Кафедра САПР", color:'black'},
    descriptionTitle : {text : "отчет", color:'black'},
    descriptionAbout : {text : "О выполнении лабораторной работы №1 по дисциплине “Основы WEB-Программирования“", color:'black'},
    descriptionOption : {text : "Вариант №5", color:'black'},
    authorsPersonDescription : {text : "студенты группы 20ВА1", color:'black'},
    authorsFirstPerson : {text : "Рыбкин Д.А", color:'black'},
    authorsSecondPerson : {text : "Шульмин А.Н", color:'black'},
    reviewersPerson : {text : "Бурукина И.П", color:'black'},
    footer : {text : "Пенза 2021 г.", color:'black'},

};

export const input = (state = initialState, action : ActionInterface) => {
    return produce(state, draft => {
        switch (action.type) {
            case  InputActionsTypes.SET_TITLE:
                draft.title = action.payload;
                break;
            case  InputActionsTypes.SET_SUBTITLE:
                draft.subtitle = action.payload;
                break;
            case  InputActionsTypes.SET_DEPARTMENT:
                draft.department = action.payload;
                break;
            case  InputActionsTypes.SET_DESCRIPTION_TITLE:
                draft.descriptionTitle = action.payload;
                break;
            case  InputActionsTypes.SET_DESCRIPTION_ABOUT:
                draft.descriptionAbout = action.payload;
                break;
            case  InputActionsTypes.SET_DESCRIPTION_OPTION:
                draft.descriptionOption = action.payload;
                break;
            case  InputActionsTypes.SET_AUTHORS_PERSON_DESCRIPTION:
                draft.authorsPersonDescription = action.payload;
                break;
            case  InputActionsTypes.SET_AUTHORS_FIRST_PERSON:
                draft.authorsFirstPerson = action.payload;
                break;
            case  InputActionsTypes.SET_AUTHORS_SECOND_PERSON:
                draft.authorsSecondPerson = action.payload;
                break;
            case  InputActionsTypes.SET_REVIEWERS_PERSON:
                draft.reviewersPerson = action.payload;
                break;
            case  InputActionsTypes.SET_FOOTER:
                draft.footer = action.payload;
                break;
        }
    })
}