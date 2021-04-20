import { InMemoryCache, ApolloClient } from '@apollo/client';

import { ApolloProvider } from 'react-apollo'
import CharactersList from './components/CharactersList';
import ShowCharacter from './components/ShowCharacter'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://rickandmortyapi.com/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1>Rick and Morty React GQL</h1>
          <CharactersList />
          
      </div>
    </ApolloProvider>
  );
}

export default App;
