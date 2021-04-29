import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import ShowCharacter from './ShowCharacter'
import { allCharactersQuery } from '../queries/queries';
import CharacterComment from './CharacterComment'
class CharactersList extends Component {
    constructor(props){
        super(props);
        this.state = {
        selectedId: 1,
        selectedName: 'Rick Sanchez',
        commentDisplay: false
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
                <li key={char.id} onClick={ (e) => this.setState({selectedId: char.id, selectedName: char.name}) }>{char.name}</li>
                )
            
            })
        }   
        
    }
    toggleCommentBox () {
        this.setState({commentDisplay: !this.state.commentDisplay})
    }
    render() {
        
        
        return(
            <div className="mainContainer" >
                <div className="listContainer" >
                    <ul>
                        {this.displayCharacters()}
                    </ul>
                    <div className="pageButtons">
                        {this.props.currentPage > 1 && <button onClick={() => this.props.setCurrentPage(this.props.currentPage - 1)}>Previous Page</button>}
                        {this.props.currentPage < 34 && <button onClick={() => this.props.setCurrentPage(this.props.currentPage + 1)}>Next Page</button>}

                    </div>

                </div>

                <div className="showCharcterContainer">
                    {this.state.selectedId && <ShowCharacter charId={this.state.selectedId}/>}
                    <button className="addCharacterCard" onClick={() => this.toggleCommentBox() }>Add Character Comment</button>
                    {this.state.commentDisplay && <CharacterComment currentCharId={this.state.selectedId} currentCharName={this.state.selectedName} />}
                </div>
                
                
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
