import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({});
// Apollo makes the assumption that the app.use() in server.js is routed to '/graphql'
// see ../server/server.js line 31


const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>Lyrical</div>
    </ApolloProvider>
  );
};
// Apollo Provider is basically the glue layer between the backend, the Apollo Store, and the front end

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
