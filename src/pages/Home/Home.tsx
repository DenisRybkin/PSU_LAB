import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Line} from "../../components/Line/Line";
import style from './Home.module.scss'
import {Person} from "./Data.interface";


export const Home: React.FC = (): JSX.Element => {

    const {data,isLoaded} = useTypedSelector(state => state.fetchData);

    console.log('render home')

    const buildPageTitle = () : JSX.Element => {
        return (
            <div className={style.pageList}>
                <div className={style.header}>
                    <Line className="h1" tag="h1" type="title"
                          color={data.title.color}>
                        {data.title.text}
                    </Line>
                    <Line className="h2" tag="h2" type="subtitle"
                          color={data.subtitle.color}>
                        {data.subtitle.text}
                    </Line>
                    <Line className="h3" tag="h3" type="department"
                          color={data.department.color}>
                        {data.department.text}
                    </Line>
                </div>
                <div className="body">
                    <div className={style.description}>
                        <Line tag="h3" className="shortH3" type="descriptionTitle"
                              color={data.description.title.color}>
                            {data.description.title.text}
                        </Line>
                        <Line tag="h5" type="descriptionAbout" color={data.description.about.color}>
                            {data.description.about.text}
                        </Line>
                        <Line className="shortText mb" tag="h3" type="descriptionOption"
                              color={data.description.option.color}>
                            {data.description.option.text}
                        </Line>
                    </div>
                    <div className={style.authorsReviewers}>
                        <div className="authors">
                            <Line tag="span" color={data.authors.authorsAction.color} type="authorsAction">
                                {data.authors.fullNames.length > 0 ?  "Выполнили :" : "Выполнил :"}
                            </Line>
                            <ul>
                                {data.authors.fullNames
                                    .map((item: { person: Person; }, index: number) => (
                                        <Line tag="li" key={`${item.person.text}+${index}`}
                                              color={data.authors.fullNames[index].person.color}
                                              type={index === 0 ? "authorFirstPerson" : "authorSecondPerson"}>
                                            {item.person.text}
                                        </Line>
                                    ))}
                            </ul>
                        </div>
                        <div className="reviewers">
                            <Line tag="span" className="shortSpan" color={data.reviewers.reviewersAction.color} type="reviewersAction">
                                {data.reviewers.fullNames.length > 1 ?  "Приняли :" : "Приняла :"}
                            </Line>
                            <ul>
                                {data.reviewers.fullNames
                                    .map((item : { person: Person; }, index : number) => (
                                        <Line tag="li" key={`${item.person.text}+${index}`} type={index === 0 ? "reviewersFirstPerson" : "reviewersSecondPerson"}
                                              color={data.reviewers.fullNames[index].person.color}>
                                            {item.person.text}
                                        </Line>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <Line className="footer" tag="footer" type='footer' color={data.footer.color}>
                    {data.footer.text}
                </Line>
            </div>
        )
    }
    const downlandPage = (): void => {
        console.log(data);
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