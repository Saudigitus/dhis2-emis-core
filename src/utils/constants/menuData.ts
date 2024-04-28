import enrollment from "../../assets/images/home/enrollment.png";
import attendance from "../../assets/images/home/attendance.png";
import performance from "../../assets/images/home/performance.png";
import transfer from "../../assets/images/home/transfer.png";
import result from "../../assets/images/home/result.png";
import gauge from "../../assets/images/sidebar/gauge.svg"
import home from "../../assets/images/sidebar/home.svg"
import fileDocument from "../../assets/images/sidebar/file-document.svg"
import glyph from "../../assets/images/sidebar/Glyph.svg"
import listAdd from "../../assets/images/sidebar/listAdd.svg"
import logOut from "../../assets/images/sidebar/log-out.svg"
import userGroup from "../../assets/images/sidebar/user-group.svg"
import { MenuDataProps } from "../../types/menu/MenuTypes";

function menuData(currentAcademicYear: string): MenuDataProps[] {
    return [
        {
            title: "Calendar",
            displayInDashboard: false,
            subItem: [
                {
                    dashBoardIcon: home,
                    sidebarIcon: glyph,
                    title: "General details",
                    showBadge:false,
                    program: "programId",
                    leftLabel: "Total",
                    appName: "SEMIS",
                    formLink: "home",
                    route: `generalDetails`,
                    disabled: false
                },
                {
                    dashBoardIcon: home,
                    sidebarIcon: gauge,
                    title: "Non-school days",
                    showBadge:false,
                    program: "programId",
                    leftLabel: "Total",
                    appName: "SEMIS",
                    formLink: "home",
                    route: `non-school-days`,
                    disabled: false
                }
            ]
        },
        {
            title: "Terms",
            displayInDashboard: true,
            subItem: [
                {
                    dashBoardIcon: enrollment,
                    sidebarIcon: fileDocument,
                    title: "Term 1",
                    program: "programId",
                    showBadge:false,
                    leftLabel: "Total",
                    appName: "SEMIS-Enrollment",
                    formLink: "form-enrollment",
                    route: `term1`,
                    disabled: false
                },
                {
                    dashBoardIcon: attendance,
                    sidebarIcon: fileDocument,
                    title: "Term 2",
                    program: "programId",
                    showBadge:false,
                    leftLabel: "Total",
                    appName: "SEMIS-Attendance",
                    formLink: "form-attendance",
                    route: `term2`,
                    disabled: false
                },
                {
                    dashBoardIcon: performance,
                    sidebarIcon: fileDocument,
                    title: "Term 3",
                    showBadge:false,
                    program: "programId",
                    leftLabel: "Total",
                    appName: "SEMIS-Performance",
                    formLink: "form-performance",
                    route: `term3`,
                    disabled: false
                }
            ]
        }
    ];
}

export {menuData}