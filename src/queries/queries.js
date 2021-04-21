import { gql } from 'apollo-boost';

const allCharactersQuery = gql`
    query ($page: Int!){
        characters (page: $page){
        results{
            name
            id
            species
            
        }
    }
}
`
const ShowCharacterQuery = gql`
    query ($id: ID!) {
        character(id: $id) {
            id
            name
            species
            image
        }

    }
`


export { allCharactersQuery, ShowCharacterQuery };
