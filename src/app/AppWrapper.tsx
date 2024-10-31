import React from 'react'
import { CenteredContent, CircularLoader } from "@dhis2/ui";
import { useDataStore } from '../hooks/appwarapper/useDataStore';
import { AppConfigurationsProps } from '../types/app/AppConfigurationsProps';
import { useGetInstanceApps } from '../hooks/appwarapper/useGetInstanceApps';

export default function AppWrapper(props: AppConfigurationsProps) {
    const { error, loading } = useDataStore()
    const { error: errorApps, loading: loadingApps } = useGetInstanceApps();

    if (loading || loadingApps) {
        return (
            <CenteredContent>
                <CircularLoader />
            </CenteredContent>
        )
    }

    if (error != null || errorApps) {
        return (
            <CenteredContent>
                Something went wrong wen loading the app, please check if you app is already configured
            </CenteredContent>
        )
    }

    return (
        <>{props.children}</>
    )
}
