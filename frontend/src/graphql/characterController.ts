import {gql} from '@apollo/client'

export const CHARACTERS = gql`
    query getCharacters{
        characters {
            success
            errors
            data {
                id
                name
                gender
                status
            }
        }
    }
  `

export const GET_CHARACTER = gql`
    query getCharacterById($characterId: ID!){
        character(character_id: $characterId) {
            success
            errors
            data {
                name
                gender
                image
                species
                status
            }
        }
    }
`
