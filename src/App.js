import { InMemoryCache, ApolloClient } from '@apollo/client';
import { useState } from 'react';
import { ApolloProvider } from 'react-apollo'
import CharactersList from './components/CharactersList';
import ShowCharacter from './components/ShowCharacter'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://rickandmortyapi.com/graphql'
});

const client2 

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1>Rick and Morty React GQL</h1>
          <CharactersList currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          
      </div>
    </ApolloProvider>
  );
}

export default App;
