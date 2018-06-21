import gql from 'graphql-tag'

export default gql`
    query getNotifications {
        notifications {
            name,
            id,
            time
        }
    }
`
