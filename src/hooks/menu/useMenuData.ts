import { menuData } from "../../utils";
import { useRecoilValue } from "recoil";
import { formatMenuData } from "../../utils/common/formatMenuData";
import { InstanceAppState } from "../../schema/instanceAppsSchema";
import { getDataStoreKeys } from "../../utils/common/dataStore/getDataStoreKeys"

const useMenuData = () => {
    const { currentAcademicYear } = getDataStoreKeys();
    const instanceApps = useRecoilValue(InstanceAppState)

    return {
        menuData: formatMenuData(menuData(currentAcademicYear), instanceApps)
    }
}

export { useMenuData }