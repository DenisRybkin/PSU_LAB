import React from 'react';
import {LineInterface} from "./Line.interface";
import style from './Line.module.scss';
import editSvg from './edit.svg';
import classNames from 'classnames';
import {Popup} from "../Popup/Popup";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {onOutSideClick} from "../../hooks/useOutSideclick";
import {useDispatch} from "react-redux";
import {UseSwitchDispatch} from "../../hooks/useSwitchDispatch";


export const Line = React.memo(({tag, children,className,type,color} : LineInterface) : JSX.Element => {

    const dispatch = useDispatch();
    const {colors} = useTypedSelector(state => state.fetchColors);

    const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
    const [text, setText] = React.useState<string>(children? children : '');
    const [activeColor, setActiveColor] = React.useState<string>(color);

    const popupRef = React.useRef<HTMLInputElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null)

    const changeText = (text: string) : void => {
        UseSwitchDispatch(type,dispatch,text,activeColor,children);
        setText(text);
    }
    const closePopup = () => {
        setVisiblePopup(false);
    }
    const switchAssignColor = (color:string) : void => {
        setActiveColor(color);
        UseSwitchDispatch(type,dispatch,text,color,children);
    }
    const ClearText = () : void => {
        setText('');
        closePopup();
        UseSwitchDispatch(type,dispatch,'',activeColor,children);
    }
    const onOutsideClick = React.useCallback<(event : any) => void>((event : any) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if(!path.includes(inputRef.current)){
            onOutSideClick(event,closePopup,popupRef);
            closePopup();
        }
    }, [popupRef]);

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