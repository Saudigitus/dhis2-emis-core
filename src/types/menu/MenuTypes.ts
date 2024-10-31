interface MenuDataProps {
    title: string
    displayInMenu?: boolean
    displayInDashboard?: boolean
    subItem: MenuDataItemProps[]
}

interface MenuDataItemProps {
    displayInMenu?: boolean
    dashBoardIcon: string
    sidebarIcon:string
    title: string
    leftLabel: string
    program: string
    formLink: string
    showBadge:boolean
    value?: string
    route: string
    disabled?: boolean
    appName: string
}

export type {MenuDataProps, MenuDataItemProps}