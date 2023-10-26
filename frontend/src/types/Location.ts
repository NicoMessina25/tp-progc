import { Character } from "./Character"
import { TError } from "./fetcher"

export interface Location{
    id: number,
    name: string,
    type: string,
    dimension:string
    residents: Character[]
    created: string
}

export interface RobotsAliensHumans {
    robots:number,
    aliens:number,
    humans:number
}

export interface LocationStats {
    alive:number,
    dead:number,
    current_guests:number,
    robots_aliens_humans:RobotsAliensHumans
}

export interface LocationStatsResult{
    data: LocationStats | undefined, loading: boolean, error: TError, refetch: ()=>void
}