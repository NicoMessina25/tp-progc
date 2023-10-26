import Title from '@/components/Labels/Title/Title';
import useLocations from '@/hooks/useLocations';
import { NextRouter, useRouter } from 'next/router';
import {Location} from '@/types/Location'
import React from 'react'
import KeyValueLabel from '@/components/Labels/KeyValueLabel/KeyValueLabel';
import Spinner from '@/components/Spinner/Spinner';
import { DataTable } from '@/components/Table/Table';
import useCharacters from '@/hooks/useCharacters';
import { Label } from '@/components/Labels/Label/Label';
import BackButton from '@/components/Buttons/BackButton/BackButton';
import useLocationStats from '@/hooks/useLocationStats';
import LocationStatCard from '@/components/pagesComponents/LocationStatCard/LocationStatCard';
import Pie from '@/components/Pie/Pie';
import { Character } from '@/types/Character';

export default function LocationDetails() {
    const router:NextRouter = useRouter();
    const id = String(router.query.id)

    const {data, loading} = useLocations({entityId:id})
    const locationStats = useLocationStats(id)
    const {robots = 0, aliens = 0, humans = 0} = locationStats.data?.robots_aliens_humans ?? {}

    if(loading)
        return <Spinner/>


    if(data instanceof Array)
        return

    return (
        <div className='flex flex-col p-10 md:p-24'>
            <BackButton className='w-fit mb-5' />
            <Title>{data?.name}</Title>
            <div className='mt-5 flex flex-col lg:flex-row w-full justify-between'>
                <div className='w-full lg:w-1/2 h-fit flex-col'>
                    <div className='p-5 rounded-lg bg-gradient-to-r from-rickMortyDark/30'>
                        <KeyValueLabel label='Dimension: ' labelClassName='text-xl'  value={data?.dimension} />
                        <KeyValueLabel label='Type: ' labelClassName='text-xl'  value={data?.type} />
                    </div>
                    {!locationStats.loading ? <div className='w-full mt-8 flex flex-col'>
                        <Label className='text-2xl' text='Stats'/>
                        <div className='w-full flex flex-wrap justify-between'>
                            <LocationStatCard title={"Alive"} value={locationStats.data?.alive} className='w-full sm:w-1/4 my-3 mx-1' />
                            <LocationStatCard title={"Dead"} value={locationStats.data?.dead} className='w-full sm:w-1/4 my-3 mx-1' />
                            <LocationStatCard title={"Current guests"} value={locationStats.data?.current_guests} className='w-full sm:w-1/4 my-3 mx-1' />
                            <LocationStatCard title={"Robots vs Aliens vs Humans"}
                            className='w-full my-3 mx-1' >
                                <Pie data={[
                                        {value:robots, label:"Robots"},
                                        {value:aliens, label:"Aliens"},
                                        {value:humans, label:"Humans"}
                                    ]}
                                    dataLabel='# residents'
                                    className='!w-full md:!w-1/2 !h-auto'                                    
                                />
                            </LocationStatCard>
                        </div>
                    </div> : <Spinner/>

                    }
                </div>
                
                <div className='flex flex-col w-full lg:w-1/2 lg:ml-4'>
                    <Label className='text-2xl' text='Residents'/>
                    {data?.residents ? <DataTable columns={[
                        {
                            accessorKey:"name",
                            header:"Name"   
                        },
                        {
                            accessorKey:"gender",
                            header:"Gender"
                        },
                        {
                            accessorKey:"status",
                            header:"Status"
                        }
                    ]} data={data?.residents} onView={(character:Character)=>
                        router.push(`../character/${character.id}`)} />:
                    <Spinner />
                }
                </div>
                

            </div>
           

        </div>
    )
}
