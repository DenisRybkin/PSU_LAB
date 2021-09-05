import produce from 'immer';
import {DataAction,DataActionsTypes,DateState} from '../types/data';

const initialState : DateState = {
    isLoaded : true,
    data : {title: "министерство науки и высшего образования рф",
        subtitle: "пензенский государственный университет",
        department: "Кафедра САПР",
        description: {
            title : "отчет",
            about: "О выполнении лабораторной работы №1 по дисциплине “Основы WEB-Программирования",
            option : "Вариант №5"
        },
        authors : {
            personsDescription : "студент группы 20ВА1",
            fullNames : [
                {person : "Рыбкин Д.А"},
                {person : "Шульмин А.Н"}]
        },
        reviewers : {
            fullNames : [
                {person: "Бурукина И.П"}
            ]
        },
        footer : "Пенза 2021 г."},
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
            default :
                return state;
        }
    })
}