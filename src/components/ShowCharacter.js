import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { ShowCharacterQuery } from '../queries/queries';

class ShowCharacter extends Component {

  render () {
    console.log('asldjflaskdjflasf',this.props)
    return (
      <div>
        here we are
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
