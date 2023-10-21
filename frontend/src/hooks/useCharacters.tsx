import { GET_CHARACTER, CHARACTERS } from "@/graphql/characterController";
import { Character } from "@/types/Character";
import { ResultDTO, initialResultDTO } from "@/types/ResultDTO";
import { FetcherResult } from "@/types/fetcher";
import { useQuery } from '@apollo/client'

interface UseCharactersProps {
    entityId?:number
}

export default function useCharacters(props?:UseCharactersProps):FetcherResult<Character> {
    const {entityId} = props ?? {}

    const {data, loading, error, refetch} = useQuery<{characters: ResultDTO<Character[]>, character: ResultDTO<Character>}>(entityId? GET_CHARACTER : CHARACTERS,{
        variables: {characterId:entityId}
    });


    const result:ResultDTO<Character | Character[]> = data?.[entityId? "character":"characters"] ?? initialResultDTO

    return {data: result.data, loading, error: {error: !!error || !result.success, message: result.errors?.length > 0 ? result.errors.join("-") : error?.message}, refetch};
}