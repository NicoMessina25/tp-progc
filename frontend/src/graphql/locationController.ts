import {gql} from '@apollo/client'

export const LOCATIONS = gql`
  query($filter: FilterLocation)  {
    locations(filter: $filter) {
      data {
        id
        name
        dimension
        type
      }
    }
  }
  `

export const GET_LOCATION = gql`
  query($locationId: ID!)  {
    location(location_id: $locationId) {
      data {
        name
        dimension
        type
        residents {
          id
          name
          gender
          status
        }
      }
    }
  }
`

export const GET_LOCATION_STATS = gql`
  query($locationId: ID!)  {
    locationStats(location_id: $locationId) {
      data {
        alive
        dead
        current_guests
        robots_aliens_humans {
          aliens
          robots
          humans
        }
      }
    }
  }
`
