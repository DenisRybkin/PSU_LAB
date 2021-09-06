import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Line} from "../../components/Line/Line";
import style from './Home.module.scss'


export const Home: React.FC = (): JSX.Element => {

    const {data,isLoaded} = useTypedSelector(state => state.fetchData);
    const page = useTypedSelector(state => state.input);

    const buildPageTitle = () : JSX.Element => {
        return (
            <div className={style.pageList}>
                <div className={style.header}>
                    <Line className="h1" tag="h1" type="title">
                        {data.title}
                    </Line>
                    <Line className="h2" tag="h2" type="subtitle">
                        {data.subtitle}
                    </Line>
                    <Line className="h3" tag="h3" type="department">
                        {data.department}
                    </Line>
                </div>
                <div className="body">
                    <div className={style.description}>
                        <Line tag="h3" className="shortH3" type="descriptionTitle">
                            {data.description.title}
                        </Line>
                        <Line tag="h5" type="descriptionAbout">
                            {data.description.about}
                        </Line>
                        <Line className="shortText mb" tag="h3" type="descriptionOption">
                            {data.description.option}
                        </Line>
                    </div>
                    <div className={style.authorsReviewers}>
                        <div className="authors">
                            <Line tag="span">
                                {data.authors.fullNames.length > 0 ?  "Выполнили :" : "Выполнил :"}
                            </Line>
                            <ul>
                                {data.authors.fullNames
                                    .map((item, index) => (
                                        <Line tag="li" key={item.person}
                                              type={index === 0 ? 'authorsFirstPerson' : 'authorsSecondPerson'}>
                                            {item.person}
                                        </Line>
                                    ))}
                            </ul>
                        </div>
                        <div className="reviewers">
                            <Line tag="span" className="shortSpan">
                                {data.reviewers.fullNames.length > 1 ?  "Приняли :" : "Приняла :"}
                            </Line>
                            <ul>
                                {data.reviewers.fullNames
                                    .map((item, index) => (
                                        <Line tag="li" key={item.person} type='reviewersPerson'>
                                            {item.person}
                                        </Line>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <Line className="footer" tag="footer" type='footer'>
                    {data.footer}
                </Line>
            </div>
        )
    }
    const downlandPage = (): void => {
        console.log(page);
    }

    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={downlandPage}>Загрузить</button>
            <div className="container" >
                {Object.keys(data).length > 0 &&
                isLoaded && buildPageTitle()}
                {Object.keys(data).length === 0 && <p>404</p>}
            </div>
        </div>
    );
};