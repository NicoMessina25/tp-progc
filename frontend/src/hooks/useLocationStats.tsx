import { GET_LOCATION, GET_LOCATION_STATS, LOCATIONS } from "@/graphql/locationController";
import { Location, LocationStats, LocationStatsResult } from "@/types/Location";
import { ResultDTO, initialResultDTO } from "@/types/ResultDTO";
import { FetcherResult } from "@/types/fetcher";
import { useQuery } from '@apollo/client'

export default function useLocationStats(entityId:string):LocationStatsResult {

    const {data, loading, error, refetch} = useQuery<{locationStats: ResultDTO<LocationStats>}>(GET_LOCATION_STATS,{
        variables: {locationId:entityId}
    });

    const result:ResultDTO<LocationStats> = data?.["locationStats"] ?? initialResultDTO

    return {data: result.data, loading, error: {error: !!error || !result.success, message: result.errors?.length > 0 ? result.errors.join("-") : error?.message}, refetch};
}