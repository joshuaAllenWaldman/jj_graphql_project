import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import ShowCharacter from './ShowCharacter'
import { allCharactersQuery } from '../queries/queries';

class CharactersList extends Component {
    state = {
        selected: null
    }
    displayCharacters(){
        const data = this.props.data;
        if (data.loading) {
            return (<div>Loading Characters...</div>)
        } else {
            console.log(data.characters.results)
            return data.characters.results.map(char => {  

                return (
                <li key={char.id} onClick={ (e) => this.setState({selected: char.id}) }>{char.name}</li>
                )
            
            })
        }   
        
    }
    render() {
        console.log(this.props)
        return(
            <div>
                <ul>
                    {this.displayCharacters()}
                </ul>
                <ShowCharacter charId={this.state.selected}/>
            </div>
        )
    }
};

export default graphql (allCharactersQuery)(CharactersList);
