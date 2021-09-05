import axios from "axios";
import {ColorsInterface} from "../../pages/Home/Colors.interface";

export const  fetchColors = () => (dispatch : any) => {
    try {
        axios.get<ColorsInterface>('http://localhost:3002/colors')
            .then(({data}) => dispatch(setColors(data)))
    } catch (error) {
        alert (`Произошла ошибка при загрузки данных с сервера : ${error}`)
    }
}

export const setColors = (colors : ColorsInterface) : object => ({
    type : "SET_COLORS",
    payload : colors,
})