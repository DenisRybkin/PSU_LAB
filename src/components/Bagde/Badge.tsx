import React from "react";
import './Badge.scss'
import classNames from "classnames";
import {BadgeInterface} from "./Badge.interface";

export function Badge({color, onSelectColor,className}: BadgeInterface) {
    return (
        <i onClick={onSelectColor} className={classNames('badge',
            {[`badge--${color}`] : color},
            className
        )}
        > </i>
    );
}