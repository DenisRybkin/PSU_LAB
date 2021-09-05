import axios from "axios";
import {DataInterface} from "../../pages/Home/Data.interface";

export const fetchData = () => (dispatch : any) => {
    dispatch(setLoading(false));
    try {
        axios.get<DataInterface>('http://localhost:3001/title-page')
            .then(({data} ) => dispatch(setData(data)))
    } catch (error) {
        alert (`Произошла ошибка при загрузки данных с сервера : ${error}`)
    }
}
export const setData = (data : DataInterface) : object => ({
    type: "SET_DATA",
    payload: data,
})
export const setLoading = (loading : boolean) : object => ({
    type : 'SET_LOADING',
    payload : loading
})