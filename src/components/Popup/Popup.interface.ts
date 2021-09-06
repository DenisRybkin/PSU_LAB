import {ColorsInterface} from "../../pages/Home/Colors.interface";

export interface PopupInterface {
    colors : ColorsInterface,
    onClosePopup : () => void,
    switchAssignColor : (color:string) =>void,
    onEdit : (color :string) => void,
    onClear : () => void,
    popupRef : any,
    onOutsideClick : (event : any) => void,
}