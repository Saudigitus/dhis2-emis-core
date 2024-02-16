import React, { useState } from 'react'
import style from "./SideBar.module.css"
import SideBarItem from './components/SideBarItem'
import SibeBarCollapseButton from './components/SibeBarCollapseButton';
import { menuData } from '../../../utils';
import { MenuDataProps } from '../../../types/menu/MenuTypes';
import { getDataStoreKeys } from '../../../utils/common/dataStore/getDataStoreKeys';

export default function SideBar(): React.ReactElement {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { currentAcademicYear } = getDataStoreKeys()

    return (
        <aside className={collapsed ? style.sideBarContainerCollapsed : style.sideBarContainer}>
            <div className={style.sideBarMenu}>
                {
                    menuData(currentAcademicYear).map((element:MenuDataProps, index) => (
                        <SideBarItem key={index} title={element.title} subItem={element.subItem} />
                    ))
                }
            </div>
            <SibeBarCollapseButton collapsed={collapsed} setCollapsed={setCollapsed} />
        </aside>
    )
}
