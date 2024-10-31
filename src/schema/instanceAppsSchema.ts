import { atom } from "recoil"
import { InstanceAppType } from "../types/instance/InstanceAppsTypes"

export const InstanceAppState = atom<InstanceAppType[]>({
    key: "InstanceApp-get-state",
    default: []
})
