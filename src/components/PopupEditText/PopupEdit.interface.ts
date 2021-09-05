import {ColorsInterface} from "../../pages/Home/Colors.interface";

export interface PopupEditInterface {
    colors : ColorsInterface,
    onClosePopup : any,
    switchAssignColor : any,
    onEdit : any,
    onClear : any,
    popupRef : any,
    onOutsideClick : any,
}