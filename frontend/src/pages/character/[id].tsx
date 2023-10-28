import BackButton from '@/components/Buttons/BackButton/BackButton';
import KeyValueLabel from '@/components/Labels/KeyValueLabel/KeyValueLabel';
import Title from '@/components/Labels/Title/Title';
import Spinner from '@/components/Spinner/Spinner';
import useCharacters from '@/hooks/useCharacters'
import { NextRouter, useRouter } from 'next/router';
import React from 'react'

export default function CharacterDetails() {
    const router:NextRouter = useRouter();
    const id = String(router.query.id)

    const {data, loading} = useCharacters({entityId:id})
    
    if(loading)
        return <Spinner/>


    if(!data || data instanceof Array)
        return

    const {name, species, status, gender, image} = data;

    return <div className='p-10 lg:p-24 flex flex-col justify-center'>
        <BackButton className='w-fit mb-5'/>
        <Title>{name}</Title>
        <div className='flex flex-col md:flex-row my-4 md:items-end'>
            <img src={image} className='rounded-lg mb-4 w-full md:w-1/3' alt={`${name}-image`} />
            <div className='md:ml-3 md:mb-4'>
                <KeyValueLabel label='Status:' className='bg-gradient-to-r p-1 rounded from-rickMortyDark/30 mb-2' labelClassName='text-xl'  value={status} />
                <KeyValueLabel label='Species:' className='bg-gradient-to-r p-1 rounded from-rickMortyDark/30 mb-2' labelClassName='text-xl'  value={species} />
                <KeyValueLabel label='Gender:' className='bg-gradient-to-r p-1 rounded from-rickMortyDark/30 mb-2' labelClassName='text-xl'  value={gender} />
            </div>
        </div>
        
    </div>
    
}
