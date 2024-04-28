import React from 'react';
import style from "../SideBar.module.css"
import { Badge } from '../../../badge';
import classNames from 'classnames';
import { MenuDataItemProps } from '../../../../types/menu/MenuTypes';
import { Link, useLocation } from 'react-router-dom';

export default function SideBarSubItem({ sidebarIcon, title, showBadge, disabled, route, appName,program,leftLabel }: MenuDataItemProps) {
    const location = useLocation()

    return (
        <Link to={`/${route}`} className={style.subItemLink}>
            <li className={location.pathname.slice(1) === route ? style.sideBarSubItemContainerActive : classNames(style.sideBarSubItemContainer, (Boolean(disabled)) && style.sideBarDisabledSubItem)}>
                <img src={sidebarIcon} /> <span className={style.sideBarSubItemLabel}>{title}</span>
                {showBadge ? <div className={style.badgeContainer}><Badge value='10' /></div> : null}
                <div className={style.tooltipContainer}>
                    {title}
                </div>
            </li>
        </Link>
    )
}
