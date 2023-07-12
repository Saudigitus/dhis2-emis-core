import React from 'react';
import style from "./SideBar.module.css"
import { Badge } from '../../badge/Badge';
import { type SideBarSubItemProps } from '../../../types/sideBar/SideBarTypes';

function SideBarSubItem({ icon, label, showBadge, route }: SideBarSubItemProps) {
    console.log(location, route);
    return (
        <li className={location.hash.slice(1) === route ? style.SideBarSubItemContainerActive : style.SideBarSubItemContainer}>
            <img src={icon} />
            <span>{label}</span>
            {showBadge ? <div className={style.BadgeContainer}><Badge value='10' /></div> : null}
            <div className={style.TooltipContainer}>
                {label}
            </div>
        </li>
    )
}
export { SideBarSubItem, type SideBarSubItemProps }
