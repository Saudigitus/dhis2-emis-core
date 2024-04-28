import { Navigate } from "react-router-dom";
import React from "react";
import { SideBarLayout, SimpleLayout } from "../../layout"
import { GeneralDetails, NonSchoolDays,Terms} from "../../pages";

export default function RouteList() {
    return [
        {
            path: "/",
            layout: SimpleLayout,
            component: () => <Navigate to="/generalDetails" replace />
        },
        {
            path: "/generalDetails",
            layout: SideBarLayout,
            component: GeneralDetails
        },
        {
            path: "/non-school-days",
            layout: SideBarLayout,
            component: NonSchoolDays
        },
        {
            path: "/term1",
            layout: SideBarLayout,
            component: Terms
        },
        {
            path: "/term2",
            layout: SideBarLayout,
            component: Terms
        },
        {
            path: "/term3",
            layout: SideBarLayout,
            component: Terms
        }
    ]
}
