import React from "react";
import style from "./Home.module.css";
import { DashboardCard, Title, WithPadding } from "../../components";
import { menuData } from "../../utils/index"
import { MenuDataItemProps, MenuDataProps } from "../../types/menu/MenuTypes";
import { getDataStoreKeys } from "../../utils/common/dataStore/getDataStoreKeys";
import { useMenuData } from "../../hooks/menu/useMenuData";

function Home(): React.ReactElement {
  const { menuData } = useMenuData()

  return (
    <WithPadding padding="10px 30px">
      {menuData?.filter(item => item.displayInDashboard && item.displayInMenu).map((section: MenuDataProps, y) => (
        <div key={y} className={style.section}>
          <Title label={section.title} />
          <div className={style.containerCards}>
            {section.subItem?.filter((data: MenuDataItemProps) => data.displayInMenu).map((data: MenuDataItemProps, i: number) => (
              <div key={i}>
                <DashboardCard
                  program={data.program}
                  icon={data.dashBoardIcon}
                  title={data.title}
                  listLink={data.route}
                  formLink={"#"}
                  leftLabel={data.leftLabel}
                  value={"30"}
                  disabled={data.disabled}
                  appName={data.appName}
                />
                &nbsp;&nbsp;
              </div>
            ))}
          </div>
        </div>
      ))}
    </WithPadding>
  );
}
export default Home;
