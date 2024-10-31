import { useSetRecoilState } from 'recoil'
import { useState, useEffect } from 'react'
import { useDataEngine } from "@dhis2/app-runtime"
import { InstanceAppState } from '../../schema/instanceAppsSchema'

const ModulesQuery = {
    results: {
        resource: "apps"
    }
}


const useGetInstanceApps = () => {
    const engine = useDataEngine()
    const [error, setError] = useState<boolean>(false)
    const setData = useSetRecoilState(InstanceAppState)
    const [loading, setLoading] = useState<boolean>(false)

    const getInstanceApps = async () => {
        await engine.query(ModulesQuery, {
            onComplete: (response) => {
                setData(response?.results)
                setLoading(false)
            },
            onError: () => {
                setError(true)
                setLoading(false)
            }
        })
    }

    useEffect(() => {
        getInstanceApps()
    }, [])

    return { loading, error }
}

export { useGetInstanceApps }