import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {UniversalText} from "../../components/UniversalText/UniversalText";
import style from './Home.module.scss'


export const Home: React.FC = (): JSX.Element => {

    const {data,isLoaded} = useTypedSelector(state => state.fetchData);

    const buildPageTitle = () : JSX.Element => {
        return (
            <div className={style.pageList}>
                <div className={style.header}>
                    <UniversalText className="h1" tag="h1">
                        {data.title}
                    </UniversalText>
                    <UniversalText className="h2" tag="h2">
                        {data.subtitle}
                    </UniversalText>
                    <UniversalText className="h3" tag="h3">
                        {data.department}
                    </UniversalText>
                </div>
                <div className="body">
                    <div className={style.description}>
                        <UniversalText tag="h3" className="shortH3">
                            {data.description.title}
                        </UniversalText>
                        <UniversalText tag="h5">
                            О лабораторной работы №1 по дисциплине “Основы WEB-Программирования
                        </UniversalText>
                        <UniversalText className="shortText" tag="h5">
                            Вариант №5
                        </UniversalText>
                    </div>
                    <div className={style.authorsReviewers}>
                        <div className="authors">
                            <UniversalText tag="span">
                                {data.authors.fullNames.length > 0 ?  "Выполнили :" : "Выполнил :"}
                            </UniversalText>
                            <ul>
                                {data.authors.fullNames
                                    .map((item, index) => (
                                        <UniversalText tag="li" key={item.person}>
                                            {item.person}
                                        </UniversalText>
                                    ))}
                            </ul>
                        </div>
                        <div className="reviewers">
                            <UniversalText tag="span" className="shortSpan">
                                {data.reviewers.fullNames.length > 0 ?  "Приняли :" : "Принял :"}
                            </UniversalText>
                            <ul>
                                {data.reviewers.fullNames
                                    .map((item, index) => (
                                        <UniversalText tag="li" key={item.person}>{item.person}</UniversalText>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <UniversalText className="footer" tag="footer">
                    {data.footer}
                </UniversalText>
            </div>
        )
    }

    return (
        <div className={style.wrapper}>
            <div className="container" >
                {Object.keys(data).length > 0 &&
                isLoaded && buildPageTitle()}
                {Object.keys(data).length === 0 && <p>404</p>}
            </div>
        </div>
    );
};