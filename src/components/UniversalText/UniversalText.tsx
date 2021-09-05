import React from 'react';
import {UniversalTextInterface} from "./UniversalText.interface";
import style from './UniversalText.module.scss';
import editSvg from './edit.svg';
import classNames from 'classnames';
import {PopupEditText} from "../PopupEditText/PopupEditText";
import {useTypedSelector} from "../../hooks/useTypedSelector";


export const UniversalText = ({tag, children,className} : UniversalTextInterface) : JSX.Element => {

    const {colors} = useTypedSelector(state => state.fetchColors);
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const [text, setText] = React.useState<string | undefined>(children);
    const [activeColor, setActiveColor] = React.useState<string>('black');

    const popupRef = React.useRef(null);
    const inputRef = React.useRef(null)

    const closePopup = () => {
        setVisiblePopup(false);
    }
    const switchAssignColor = (color:string) : void => {
        setActiveColor(color);
    }
    const EditText = (color :string) => {
        setActiveColor(color);
        setVisiblePopup(!visiblePopup);
    }
    const ClearText = () : void => {
        setText('');
        setVisiblePopup(!visiblePopup);
    }
    const onOutsideClick = React.useCallback((event : any) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if(!path.includes(popupRef.current) && !path.includes(inputRef.current) ){
            setVisiblePopup(false);
        }
    }, [popupRef])

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
         onChange={(event => setText(event.target.value))}
         onFocus={() => setVisiblePopup(true)}/>

    const popupEdit : JSX.Element = <PopupEditText colors={colors} onEdit={EditText} onClear={ClearText}
                                     popupRef={popupRef} onOutsideClick={onOutsideClick}
                                     switchAssignColor={switchAssignColor} onClosePopup={closePopup}/>;
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
                    [style.shortH3] : className === 'shortH3',
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
                <footer className={className && style.footer}>
                    {visiblePopup && popupEdit}
                    {input}
                    {!visiblePopup && img}
                </footer>
            </div>
        default :
            return <></>;
    }
};