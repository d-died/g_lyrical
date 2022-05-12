import React from 'react';
// import * as ReactDOMClient from 'react-dom/client';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
// ApolloClient is entirely independent. It gets data from our server and stores it locally. 
import { ApolloProvider, InMemoryCache } from 'react-apollo';
// This ApolloProvider is the glue layer between the ApolloClient and our React app
// This is what integrates Apollo with React. 
import SongList from './components/SongList';

const client = new ApolloClient({});
// Apollo makes the assumption that the app.use() in server.js is routed to '/graphql'
// see ../server/server.js line 31


const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
