import style from "../../pages/Home/Home.module.scss";
import { Line } from "../Line/Line";
import { Person } from "../../pages/Home/Data.interface";
import React from "react";
import { BuildPageInterface } from "./BuildPage.interface";

export const BuildPage = (data: BuildPageInterface): JSX.Element => {
  return (
    <div className={style.pageList}>
      <div className={style.header}>
        <Line
          className="h1"
          tag="h1"
          type="title"
          color={data.data.title.color}
        >
          {data.data.title.text}
        </Line>
        <Line
          className="h2"
          tag="h2"
          type="subtitle"
          color={data.data.subtitle.color}
        >
          {data.data.subtitle.text}
        </Line>
        <Line
          className="h3"
          tag="h3"
          type="department"
          color={data.data.department.color}
        >
          {data.data.department.text}
        </Line>
      </div>
      <div className="body">
        <div className={style.description}>
          <Line
            tag="h3"
            className="shortH3"
            type="descriptionTitle"
            color={data.data.description.title.color}
          >
            {data.data.description.title.text}
          </Line>
          <Line
            tag="h5"
            type="descriptionAbout"
            color={data.data.description.about.color}
          >
            {data.data.description.about.text}
          </Line>
          <Line
            className="shortText mb"
            tag="h3"
            type="descriptionOption"
            color={data.data.description.option.color}
          >
            {data.data.description.option.text}
          </Line>
        </div>
        <div className={style.authorsReviewers}>
          <div className="authors">
            <Line
              tag="span"
              color={data.data.authors.authorsAction.color}
              type="authorsAction"
            >
              {data.data.authors.fullNames.length > 0
                ? "Выполнили :"
                : "Выполнил :"}
            </Line>
            <ul>
              <Line
                color={data.data.authors.fullNames[0].person.color}
                tag="li"
                type="authorFirstPerson"
              >
                {data.data.authors.fullNames[0].person.text}
              </Line>
              <Line
                color={data.data.authors.fullNames[1].person.color}
                tag="li"
                type="authorSecondPerson"
              >
                {data.data.authors.fullNames[1].person.text}
              </Line>
            </ul>
          </div>
          <div className="reviewers">
            <Line
              tag="span"
              className="shortSpan"
              color={data.data.reviewers.reviewersAction.color}
              type="reviewersAction"
            >
              {data.data.reviewers.fullNames.length > 1
                ? "Приняли :"
                : "Приняла :"}
            </Line>
            <ul>
              <Line
                color={data.data.reviewers.fullNames[0].person.color}
                tag="li"
                type="authorFirstPerson"
              >
                {data.data.reviewers.fullNames[0].person.text}
              </Line>
            </ul>
          </div>
        </div>
      </div>
      <Line
        className="footer"
        tag="footer"
        type="footer"
        color={data.data.footer.color}
      >
        {data.data.footer.text}
      </Line>
    </div>
  );
};
