import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import style from './Home.module.scss'
import classNames from "classnames";
import {useDispatch} from "react-redux";
import {fetchData} from "../../redux/actions/fetchData";
import {fetchColors} from "../../redux/actions/fetchColors";
import errorSvg from './404.png'
import arrowBackSvg from './arrowBack.svg'
import {BuildPage} from "../../components/BuildPage/BuildPage";
import axios from "axios";


export const Home: React.FC = (): JSX.Element => {

    const sendTemplate = new Promise((resolve, reject) => {

    })

    const {data,isLoaded} = useTypedSelector(state => state.fetchData);

    const downlandPage = (): void => {
        axios.post('http://localhost:3004/api/v1/title/generate ', data)
    }

    const resetState = (): void => {
        dispatch(fetchData());
    }

    const dispatch = useDispatch();

    React.useEffect(() => {
        console.log('first render',data);
        if(Object.keys(data).length === 0){
            dispatch(fetchData());
            dispatch(fetchColors());
        }
    }, [data, dispatch]);

    return (
        <div className={style.wrapper}>
            {Object.keys(data).length === 0 ? <img className={style.errorImg} src={errorSvg} alt='error'/> : <div className="container" >
                <button className={classNames(style.button, style.download)} onClick={downlandPage}>
                    Загрузить
                </button>
                <button className={classNames(style.button, style.returnDefault)} onClick={resetState}>
                    <img src={arrowBackSvg} alt="reset"/>
                    Вернутся к стандарту
                </button>
                {isLoaded && <BuildPage data={data}/>}
            </div>}
        </div>
    );
}