import React from "react";
import { PopupInterface } from "./Popup.interface";
import closeSvg from "./close.svg";
import { Badge } from "../Bagde/Badge";
import "./Popup.scss";

export const Popup = ({
  colors,
  onClosePopup,
  switchAssignColor,
  onClear,
  popupRef,
  onOutsideClick,
  activeColor,
}: PopupInterface) => {
  React.useEffect(() => {
    document.addEventListener("click", onOutsideClick);

    if (popupRef.current.closest("footer")) {
      popupRef.current.closest("footer").classList.add("footer");
      popupRef.current.classList.add("posAbs-footer");
    }
    if (popupRef.current.closest("span")) {
      popupRef.current.closest("span").classList.add("rightBlock");
      popupRef.current.classList.add("posAbs-span");
    }
    if (popupRef.current.closest("ul")) {
      popupRef.current.closest("ul").classList.add("rightBlock");
      popupRef.current.classList.add("posAbs-ul");
    }
    return () => {
      document.removeEventListener("click", onOutsideClick);
    };
  }, [onOutsideClick, popupRef]);

  return (
    <div className="add__list-popup" ref={popupRef}>
      <img
        src={closeSvg}
        onClick={onClosePopup}
        alt="close"
        className="add__list-popup-close-btn"
      />
      <div className="colors">
        {colors.colors &&
          colors.colors.map((item, index) => (
            <Badge
              key={index + item.id}
              onSelectColor={() => switchAssignColor(item.name)}
              color={item.name}
              className={activeColor === item.name ? "active-color" : undefined}
            />
          ))}
      </div>
      <button className="button button-red" onClick={onClear}>
        Стереть
      </button>
    </div>
  );
};
