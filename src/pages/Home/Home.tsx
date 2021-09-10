import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import style from "./Home.module.scss";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/actions/fetchData";
import { fetchColors } from "../../redux/actions/fetchColors";
import errorSvg from "./404.png";
import arrowBackSvg from "./arrowBack.svg";
import { BuildPage } from "../../components/BuildPage/BuildPage";
import axios from "axios";

export const Home: React.FC = (): JSX.Element => {
  const { data, isLoaded } = useTypedSelector((state) => state.fetchData);

  const downlandPage = (): void => {
    const fileName = prompt(
      "Введите название файла, в противном случае вашему файлу будет присвоено случайное имя"
    );
    const resp = axios.post(
      "http://localhost:3004/api/v1/title/generate ",
      data
    );
    resp.then((response) => {
      if (response.status === 200) {
        const id = response.data.id;
        fetch(`http://localhost:3004/api/v1/title/download/${id}`)
          .then((resp) => resp.blob())
          .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = url;
            a.download = `${fileName ? fileName : id}.docx`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          })
          .catch(() => alert("oh no!"));
      } else {
        alert("Ошибка с сервером");
      }
    });
  };

  const resetState = (): void => {
    dispatch(fetchData());
  };

  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("first render", data);
    if (Object.keys(data).length === 0) {
      dispatch(fetchData());
      dispatch(fetchColors());
    }
  }, [data, dispatch]);

  return (
    <div className={style.wrapper}>
      {Object.keys(data).length === 0 ? (
        <img className={style.errorImg} src={errorSvg} alt="error" />
      ) : (
        <div className="container">
          <button
            className={classNames(style.button, style.download)}
            onClick={downlandPage}
          >
            Загрузить
          </button>
          <button
            className={classNames(style.button, style.returnDefault)}
            onClick={resetState}
          >
            <img src={arrowBackSvg} alt="reset" />
            Вернутся к стандарту
          </button>
          {isLoaded && <BuildPage data={data} />}
        </div>
      )}
    </div>
  );
};
