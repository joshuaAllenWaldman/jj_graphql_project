import { gql } from 'apollo-boost';

const allCharactersQuery = gql`
    query {
        characters{
        results{
            name
            id
            species
            
        }
    }
}
`
const ShowCharacterQuery = gql`
    query ($id: ID) {
        character(id: $id){
            id
            name
        }

    }
`


export { allCharactersQuery, ShowCharacterQuery };
