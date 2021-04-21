import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import ShowCharacter from './ShowCharacter'
import { allCharactersQuery } from '../queries/queries';

class CharactersList extends Component {
    constructor(props){
        super(props);
        this.state = {
        selected: null
        }
    }
    
    displayCharacters(){
        const data = this.props.data;
        if (data.loading) {
            return (<div>Loading Characters...</div>)
        } else {
            // console.log(data.characters.results)
            return data.characters.results.map(char => {  

                return (
                <li key={char.id} onClick={ (e) => this.setState({selected: char.id}) }>{char.name}</li>
                )
            
            })
        }   
        
    }
    render() {
        
        
        return(
            <div className="listContainer">
                <ul>
                    {this.displayCharacters()}
                </ul>
                {this.props.currentPage > 1 && <button onClick={() => this.props.setCurrentPage(this.props.currentPage - 1)}>Previous Page</button>}
                {this.props.currentPage < 34 && <button onClick={() => this.props.setCurrentPage(this.props.currentPage + 1)}>Next Page</button>}
                {this.state.selected && <ShowCharacter charId={this.state.selected}/>}
            </div>
        )
    }
};

export default graphql (allCharactersQuery, {
    options: (props) => {
        return {
        variables: {
            page: props.currentPage
        }
        }
    }
    })(CharactersList);
