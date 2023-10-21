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
          name
          gender
          status
        }
      }
    }
  }
`
