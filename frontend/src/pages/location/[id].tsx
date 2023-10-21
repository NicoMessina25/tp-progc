import Title from '@/components/Labels/Title/Title';
import useLocations from '@/hooks/useLocations';
import { NextRouter, useRouter } from 'next/router';
import {Location} from '@/types/Location'
import React from 'react'
import KeyValueLabel from '@/components/Labels/KeyValueLabel/KeyValueLabel';
import Spinner from '@/components/Spinner/Spinner';

export default function LocationDetails() {
    const router:NextRouter = useRouter();
    const id = String(router.query.id)

    const {data, loading} = useLocations({entityId:id})

    if(loading)
        return <Spinner/>


    if(data instanceof Array)
        return

    return (
        <div className='flex flex-col p-24'>
            <Title>{data?.name}</Title>
            <KeyValueLabel label='Dimension'  value={data?.dimension} />
            <KeyValueLabel label='Type'  value={data?.type} />

        </div>
    )
}
