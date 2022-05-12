import React from "react";
import gql from 'graphql-tag';
//this graphql-tag is a helper library that allows us to make queries within a JS/JSX file.
// BECAUSE QUERIES ARE NOT VALID JS(X) CODE
import { graphql } from 'react-apollo';
// this is the library that bonds apollo library and graphQL


class SongList extends React.Component {
    render() {
        console.log(this.props)
       return <div>Song List</div>
    };
}

// this ONLY forms the query, it does NOT execute
const query = gql`
    {
        songs {
            title
        }
    }
`;

export default graphql(query)(SongList);
// graphql(query) returns a function that is immediately invoked by (SongList)
// this is the bond that actually executes the query