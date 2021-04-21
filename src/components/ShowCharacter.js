import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { ShowCharacterQuery } from '../queries/queries';

class ShowCharacter extends Component {
  displayCharacter(){
    
    const data = this.props.data
    if(data.character){
      console.log(data.character)
      return (
        <div>
          <h1>{data.character.name}</h1>
          <img src={data.character.image} alt=""/>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
  
  render () {
    // console.log('asldjflaskdjflasf',this.props.data.character)
    return (
      <div>
        {this.displayCharacter()}
      </div>
    )
    }
}

export default graphql (ShowCharacterQuery, {
  options: (props) => {
    return {
        variables: {
            id: props.charId
        }
    }
}
})(ShowCharacter);
