import React from 'react';
import {LineInterface} from "./Line.interface";
import style from './Line.module.scss';
import editSvg from './edit.svg';
import classNames from 'classnames';
import {Popup} from "../Popup/Popup";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {setTitle,
    SetSubtitle,
    SetDepartment,
    SetAuthorFirstPerson,
    SetAuthorSecondPerson,
    SetDescriptionOption,
    SetDescriptionTitle,
    SetFooter,
    SetReviewsFirstPerson,
    SetReviewsSecondPerson,
    SetDescriptionAbout,
    SetAuthorsAction,
    SetReviewersAction} from '../../redux/actions/input'
import {useDispatch} from "react-redux";


export const Line = React.memo(({tag, children,className,type,color} : LineInterface) : JSX.Element => {

    const dispatch = useDispatch();
    const {colors} = useTypedSelector(state => state.fetchColors);

    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const [text, setText] = React.useState<string>(children? children : '');
    const [activeColor, setActiveColor] = React.useState<string>(color);

    const popupRef = React.useRef(null);
    const inputRef = React.useRef(null)

    const changeText = (text: string) : void => {
        switchDispatch(activeColor,text);
        setText(text);
    }
    const closePopup = () => {
        setVisiblePopup(false);
    }
    const switchAssignColor = (color:string) : void => {
        setActiveColor(color);
    }
    const ClearText = () : void => {
        setText('');
        closePopup();
        switchDispatch(activeColor,text);
    }
    const onOutsideClick = React.useCallback<(event : any) => void>((event : any) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if(!path.includes(popupRef.current) && !path.includes(inputRef.current)){
            closePopup();
        }
    }, [popupRef])

    const switchDispatch = (color : string,text: string) => {
        alert(text)
        switch (type) {
            case 'title':
                if((children !== text || color !== 'black')){
                    if(color){
                        dispatch(setTitle(text,color));
                    } else {
                        dispatch(setTitle(text,'black'));
                    }
                }
                break;
            case 'subtitle':
                if((children !== text || color !== 'black')){
                    if(color){
                        dispatch(SetSubtitle(text,color));
                    } else {
                        dispatch(SetSubtitle(text,'black'));
                    }
                }
                break;
            case 'department':
                if((children !== text || color !== 'black')){
                    if(color){
                        dispatch(SetDepartment(text,color));
                    } else {
                        dispatch(SetDepartment(text,'black'));
                    }
                }
                break;
            case 'authorFirstPerson':
                if((children !== text || color !== 'black')){
                    if(color){
                        dispatch(SetAuthorFirstPerson(text,color));
                    } else {
                        dispatch(SetAuthorFirstPerson(text,'black'));
                    }
                }
                break;
            case 'authorSecondPerson':
                if((children !== text || color !== 'black')){
                    if(color){
                        dispatch(SetAuthorSecondPerson(text,color));
                    } else {
                        dispatch(SetAuthorSecondPerson(text,'black'));
                    }
                }
                break;
            case'descriptionOption' :
                if((children !== text || color !== 'black')){
                    if(color){
                        dispatch(SetDescriptionOption(text,color));
                    } else {
                        dispatch(SetDescriptionOption(text,'black'));
                    }
                }
                break;
            case 'descriptionTitle':
                if((children !== text || color !== 'black')){
                    if(color){
                        dispatch(SetDescriptionTitle(text,color));
                    } else {
                        dispatch(SetDescriptionTitle(text,'black'));
                    }
                }
                break;
            case 'footer':
                if((children !== text || color !== 'black')){
                    if(color){
                        dispatch(SetFooter(text,color));
                    } else {
                        dispatch(SetFooter(text,'black'));
                    }
                }
                break;
            case 'reviewersFirstPerson':
                if((children !== text || color !== 'black')){
                    if(color){
                        dispatch(SetReviewsFirstPerson(text,color));
                    } else {
                        dispatch(SetReviewsFirstPerson(text,'black'));
                    }
                }
                break;
            case 'reviewersSecondPerson':
                if((children !== text || color !== 'black')){
                    if(color){
                        dispatch(SetReviewsSecondPerson(text,color));
                    } else {
                        dispatch(SetReviewsSecondPerson(text,'black'));
                    }
                }
                break;
            case 'descriptionAbout':
                if((children !== text || color !== 'black')){
                    if(color){
                        dispatch(SetDescriptionAbout(text,color));
                    } else {
                        dispatch(SetDescriptionAbout(text,'black'));
                    }
                }
                break;
            case 'authorsAction':
                if((children !== text || color !== 'black')){
                    if(color){
                        dispatch(SetAuthorsAction(text,color));
                    } else {
                        dispatch(SetAuthorsAction(text,'black'));
                    }
                }
                break;
            case 'reviewersAction':
                if((children !== text || color !== 'black')){
                    if(color){
                        dispatch(SetReviewersAction(text,color));
                    } else {
                        dispatch(SetReviewersAction(text,'black'));
                    }
                }
                break;
            default :
                alert(type);
        }
    }

    const input : JSX.Element = <input className={classNames({
        [style.colorBlack] : activeColor === 'black',
        [style.colorAquamarine] : activeColor === 'aquamarine',
        [style.colorBlue] : activeColor === 'blue',
        [style.colorGreen] : activeColor === 'green',
        [style.colorGrey] : activeColor === 'grey',
        [style.colorPink] : activeColor === 'pink',
        [style.colorPurple] : activeColor === 'purple',
        [style.colorRed] : activeColor === 'red',
    })} type="text" value={text} ref={inputRef}
                                       onChange={(event => changeText(event.target.value))}
                                       onFocus={() => setVisiblePopup(true)}/>

    const popupEdit : JSX.Element = <Popup
        colors={colors} onClear={ClearText}
        popupRef={popupRef} onOutsideClick={onOutsideClick}
        switchAssignColor={switchAssignColor} onClosePopup={closePopup}
        activeColor={activeColor}/>;

    const img : JSX.Element =  <img src={editSvg} alt="edit" className="editSvg"/>

    switch (tag) {
        case "h1":
            return <div className={style.editable}>
                <h1>
                    {input}
                    {!visiblePopup && img}
                    {visiblePopup && popupEdit}
                </h1>
            </div>;
        case "h2":
            return <div className={style.editable}>
                <h2>
                    {input}
                    {!visiblePopup && img}
                    {visiblePopup && popupEdit}
                </h2>
            </div> ;
        case "h3":
            return <div className={style.editable}>
                <h3 className={classNames({
                    [style.mb] : className === 'shortText mb'
                })}>
                    {input}
                    {!visiblePopup && img}
                    {visiblePopup && popupEdit}
                </h3>
            </div>;
        case "h5":
            return <div className={style.editable}>
                <h5 className={classNames({
                    [style.shortText] : className === 'shortText',
                })}>
                    {input}
                    {!visiblePopup && img}
                    {visiblePopup && popupEdit}
                </h5>
            </div>
        case "span":
            return <div className={style.editable}>
                <span className={classNames({
                    [style.shortSpan] : className === 'shortSpan',
                })}>
                    {input}
                    {!visiblePopup && img}
                    {visiblePopup && popupEdit}
                </span>
            </div>
        case "li":
            return <div className={style.editable}>
                <li className={className && style.className}>
                    {input}
                    {!visiblePopup && img}
                    {visiblePopup && popupEdit}
                </li>
            </div>
        case "footer":
            return <div className={style.editable}>
                <footer className={className && style.footer} id={"#footer"}>
                    {visiblePopup && popupEdit}
                    {input}
                    {!visiblePopup && img}
                </footer>
            </div>
        default :
            return <></>;
    }
})