import { InMemoryCache, ApolloClient, ApolloProvider } from '@apollo/client';
import CharactersList from './components/CharactersList';

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
