import  {Ref} from "react";

export const onOutSideClick = (event: any, closePopup: () => void, popupRef: Ref<HTMLDivElement>) : void => {
    const path = event.path || (event.composedPath && event.composedPath());
    if(!path.includes(popupRef)){
        closePopup();
    }
}