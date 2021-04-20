import React, { Component } from 'react';
import { graphql } from '@apollo/client';
import { allCharactersQuery } from '../queries/queries';

class CharactersList extends Component {
    render() {
        return(
            <div>
                <ul>Character List</ul>
            </div>
        )
    }
};

export default graphql(allCharactersQuery)(CharactersList);
