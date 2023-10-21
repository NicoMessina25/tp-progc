import { GET_LOCATION, LOCATIONS } from "@/graphql/locationController";
import { Location } from "@/types/Location";
import { ResultDTO, initialResultDTO } from "@/types/ResultDTO";
import { FetcherResult } from "@/types/fetcher";
import { useQuery } from '@apollo/client'

export interface FilterLocation {
    type:string,
    dimension:string
}

interface UseLocationsProps {
    entityId?:string,
    filter?:FilterLocation
}

export default function useLocations(props?:UseLocationsProps):FetcherResult<Location> {
    const {entityId, filter={type:"",dimension:""}} = props ?? {}

    const {data, loading, error, refetch} = useQuery<{locations: ResultDTO<Location[]>, location: ResultDTO<Location>}>(entityId? GET_LOCATION : LOCATIONS,{
        variables: {locationId:entityId,filter:filter}
    });

    const result:ResultDTO<Location | Location[]> = data?.[entityId? "location":"locations"] ?? initialResultDTO

    return {data: result.data, loading, error: {error: !!error || !result.success, message: result.errors?.length > 0 ? result.errors.join("-") : error?.message}, refetch};
}