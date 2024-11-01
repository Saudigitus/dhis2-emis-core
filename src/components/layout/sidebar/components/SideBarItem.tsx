import React from 'react'
import style from "../SideBar.module.css"
import SideBarItemTitle from './SideBarItemTitle'
import SideBarSubItem from './SideBarSubItem'
import { MenuDataItemProps, MenuDataProps } from '../../../../types/menu/MenuTypes'

export default function SideBarItem({ title, subItem }: MenuDataProps): React.ReactElement {
    return (
        <section className={style.sideBarItemContainer}>
            <SideBarItemTitle title={title} />
            <ul className={style.sideBarItemListContainer}>
                {subItem?.filter((item) => item.displayInMenu).map((item:MenuDataItemProps, index) => (
                    <SideBarSubItem program='' leftLabel='' dashBoardIcon='' formLink='' route={item.route} key={index} sidebarIcon={item.sidebarIcon} title={item.title} showBadge={item.showBadge} disabled={item.disabled} appName={item.appName} />
                ))}
            </ul>
        </section>
    )
}
