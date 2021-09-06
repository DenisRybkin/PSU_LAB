import React, {MouseEventHandler, useRef, useState} from "react";
import {PopupInterface} from "./Popup.interface";
import closeSvg from './close.svg';
import {Badge} from "../Bagde/Badge";
import  './Popup.scss'

export const Popup = ({colors,
                                  onClosePopup,
                                  switchAssignColor,
                                  onEdit,
                                  onClear,
                                  popupRef,
                                  onOutsideClick}:PopupInterface) => {

    const [activeColor, setActiveColor] = useState<string>('black');

    const onSelectActiveColor = (color : string) : void => {
        setActiveColor(color);
        switchAssignColor(color);
    };


    React.useEffect(() => {

        document.addEventListener('click', onOutsideClick);

        if(popupRef.current.closest("footer")){
            popupRef.current.closest("footer").classList.add("footer");
            popupRef.current.classList.add("posAbs-footer");
        }
        if(popupRef.current.closest("span")){
            popupRef.current.closest("span").classList.add("rightBlock");
            popupRef.current.classList.add("posAbs-span");
        }
        if(popupRef.current.closest("ul")){
            popupRef.current.closest("ul").classList.add("rightBlock");
            popupRef.current.classList.add("posAbs-ul");
        }
        return () => {
            document.addEventListener('click', onOutsideClick);
        };
    }, [onOutsideClick]);

    console.log(popupRef.current);

    return (
        <div className="add__list-popup" ref={popupRef}>
            <img src={closeSvg} onClick={onClosePopup}
                 alt="close" className="add__list-popup-close-btn"/>
            <div className="colors">
                {colors.colors && colors.colors.map((item, index) => (
                    <Badge key={index + item.id}
                           onSelectColor={() => onSelectActiveColor(item.name)}
                           color={item.name}
                           className={activeColor === item.name ? "active-color" : undefined}
                    />
                ))}
            </div>
            <button className="button" onClick={() => onEdit(activeColor)}>Редактировать</button>
            <button className="button button-red" onClick={onClear}>Стереть</button>
        </div>
    );
};