import produce from 'immer';
import {DataAction,DataActionsTypes,DateState} from '../types/data';
import {InputActionsTypes} from "../types/data";

const initialState : DateState = {
    isLoaded : true,
    data : {
        title : {text: "министерство науки и высшего образования рф", color: "black"} ,
        subtitle : {text : "пензенский государственный университет", color:"black"},
        department : {text : "Кафедра САПР", color:"black"},
        description: {
            title : {text : "отчет", color: "black"},
            about: {text : "О выполнении лабораторной работы №1 по дисциплине “Основы WEB-Программирования“ ", color:"black"},
            option : {text : "Вариант №5", color: "black"}
        },
        authors : {
            authorsAction : {text : "Выполнили", color : "black"},
            personsDescription : {text : "студенты группы 20ВА1", color:"black"},
            fullNames : [
                {person: {text : "Рыбкин Д.А", color:"black"}
                },
                {
                    person: {text : "Шульмин А.Н", color:"black"}
                },
                {
                    person: {text : "Рыбкин Д.А", color:"black"}
                }
            ]
        },
        reviewers : {
            reviewersAction : {text : "Приняли", color : "black"},
            fullNames : [
                {
                    person : {text : "Бурукина И.П", color:"black"}
                },
                {
                    person : {text : "Бурукина И.П", color:"black"}
                }
            ]
        },
        footer : {text : "Пенза 2021 г.", color:"black"}
    },
};



export const fetchData = (state = initialState, action : DataAction) : DateState => {
    return produce(state, draft => {
        switch (action.type) {
            case DataActionsTypes.SET_DATA :
                draft.data = action.payload;
                draft.isLoaded = true;
                break;
            case DataActionsTypes.SET_LOADING :
                draft.isLoaded = action.payload;
                break;
            case  InputActionsTypes.SET_TITLE:
                draft.data.title = action.payload;
                break;
            case  InputActionsTypes.SET_SUBTITLE:
                draft.data.subtitle = action.payload;
                break;
            case  InputActionsTypes.SET_DEPARTMENT:
                draft.data.department = action.payload;
                break;
            case  InputActionsTypes.SET_DESCRIPTION_TITLE:
                draft.data.description.title = action.payload;
                break;
            case  InputActionsTypes.SET_DESCRIPTION_ABOUT:
                draft.data.description.about = action.payload;
                break;
            case  InputActionsTypes.SET_DESCRIPTION_OPTION:
                draft.data.description.option = action.payload;
                break;
            case  InputActionsTypes.SET_AUTHORS_PERSON_DESCRIPTION:
                draft.data.authors.personsDescription = action.payload;
                break;
            case  InputActionsTypes.SET_AUTHORS_ACTION:
                draft.data.authors.authorsAction = action.payload;
                break;
            case  InputActionsTypes.SET_AUTHORS_FIRST_PERSON:
                draft.data.authors.fullNames[0].person = action.payload;
                break;
            case  InputActionsTypes.SET_AUTHORS_SECOND_PERSON:
                draft.data.authors.fullNames[1].person = action.payload;
                break;
            case  InputActionsTypes.SET_REVIEWERS_ACTION:
                draft.data.reviewers.reviewersAction = action.payload;
                break;
            case  InputActionsTypes.SET_REVIEWERS_FIRST_PERSON:
                draft.data.reviewers.fullNames[0].person = action.payload;
                break;
            case  InputActionsTypes.SET_REVIEWERS_SECOND_PERSON:
                draft.data.reviewers.fullNames[1].person = action.payload;
                break;
            case  InputActionsTypes.SET_FOOTER:
                draft.data.footer = action.payload;
                break;
            default :
                return state;
        }
    })
}