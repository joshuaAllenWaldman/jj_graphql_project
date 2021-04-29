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

const AddCharacterCard = gql`
    mutation AddCharacterCard($name: String!, $comment: String!, $charId: ID!){
        addCharacter(name: $name, comment: $comment, charId: $charId){
            name
            id
            comment
        }
    }
`


export { allCharactersQuery, ShowCharacterQuery, AddCharacterCard };
