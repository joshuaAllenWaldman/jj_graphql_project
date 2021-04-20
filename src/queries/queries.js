import { gql } from 'apollo-boost';

const allCharactersQuery = gql`
    query {
        characters{
        results{
            name
            id
        }
    }
}
`

export { allCharactersQuery };
