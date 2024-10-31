import React, { useState } from 'react'
import style from "./SideBar.module.css"
import SideBarItem from './components/SideBarItem'
import SibeBarCollapseButton from './components/SibeBarCollapseButton';
import { MenuDataProps } from '../../../types/menu/MenuTypes';
import { useMenuData } from '../../../hooks/menu/useMenuData';

export default function SideBar(): React.ReactElement {
    const { menuData } = useMenuData()
    const [collapsed, setCollapsed] = useState<boolean>(false);

    return (
        <aside className={collapsed ? style.sideBarContainerCollapsed : style.sideBarContainer}>
            <div className={style.sideBarMenu}>
                {
                    menuData?.filter((element) => element.displayInMenu)?.map((element: MenuDataProps, index) => (
                        <SideBarItem key={index} title={element.title} subItem={element.subItem} />
                    ))
                }
            </div>
            <SibeBarCollapseButton collapsed={collapsed} setCollapsed={setCollapsed} />
        </aside>
    )
}
