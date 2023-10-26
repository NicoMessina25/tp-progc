import Image from 'next/image'
import { Inter } from 'next/font/google'
import { DataTable } from '@/components/Table/Table'
import Title from '@/components/Labels/Title/Title'
import useLocations from '@/hooks/useLocations'
import Spinner from '@/components/Spinner/Spinner'
import { useRouter } from 'next/router'
import { Location } from '@/types/Location'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { data,loading } = useLocations();
  const router = useRouter();

  if(loading)
    return <Spinner/>
    
  if(!(data instanceof Array))
    return

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start p-10 lg:p-24 ${inter.className}`}
    >
      <Title >Rick And Morty: Dimensions! &nbsp; <img src='/imgs/portal.png' alt='portal' style={{width:50, height:'auto'}} /></Title>
      <DataTable data={data} 
        columns={[
        {
          accessorKey:"name",
          header:"Name",
        },  
        {
          accessorKey:"type",
          header:"Type",
          filter: true
        },
        {
          accessorKey: "dimension",
          header:"Dimension",
          filter: true
        }
      ]}
      className='my-7 lg:my-14 w-full lg:w-1/2'
      onView={(location:Location)=>{
        router.push(`./location/${location.id}`)
      }}
      />
    </main>
  )
}
