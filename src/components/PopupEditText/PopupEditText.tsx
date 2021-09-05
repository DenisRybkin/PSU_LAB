import React, {MouseEventHandler, useState} from "react";
import {PopupEditInterface} from "./PopupEdit.interface";
import closeSvg from './close.svg';
import {Badge} from "../Bagde/Badge";
import  './Popup.scss'

export const PopupEditText = ({colors,
                                  onClosePopup,
                                  switchAssignColor,
                                  onEdit,
                                  onClear,
                                  popupRef,
                                  onOutsideClick}:PopupEditInterface) => {

    const [activeColor, setActiveColor] = useState<string>('black');


    const onSelectActiveColor = (color : string) : void => {
        setActiveColor(color);
        switchAssignColor(color);
    };


    React.useEffect(() => {

        document.addEventListener('click', onOutsideClick);

        return () => {
            document.addEventListener('click', onOutsideClick);
        };
    }, [onOutsideClick]);


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