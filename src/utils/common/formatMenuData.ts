import { InstanceAppType } from "../../types/instance/InstanceAppsTypes";
import { MenuDataItemProps, MenuDataProps } from "../../types/menu/MenuTypes";

export function formatMenuData(menuData: MenuDataProps[], appsList: InstanceAppType[]): MenuDataProps[] {
    menuData?.filter((menuItem: MenuDataProps) => menuItem.displayInDashboard)?.map((menuItem: MenuDataProps) => {
        menuItem?.subItem?.map((menuSubItem: MenuDataItemProps) => {
            menuSubItem.displayInMenu = Boolean(appsList?.find((app) => app.key === menuSubItem.appName))
        })
    })


    menuData?.filter((menuItem: MenuDataProps) => menuItem.displayInDashboard)?.map((menuItem: MenuDataProps) => {
        menuItem.displayInMenu = !Boolean(menuItem?.subItem?.every((menuSubItem: MenuDataItemProps) => !menuSubItem.displayInMenu))
    })

    return menuData
}