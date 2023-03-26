import { ApolloProvider,ApolloClient,InMemoryCache, HttpLink} from '@apollo/client';
import BookList from "./components/BookList";
import AddBook from './components/AddBook';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  }),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Ninja's reading list</h1>
        <BookList />
        <AddBook/> 
      </div>
    </ApolloProvider>
  );
}

export default App;
