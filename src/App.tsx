import React, { Suspense } from 'react';

import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo-hooks';

import { RecipeList } from './components/RecipeList';

const client = new ApolloClient({
    link: createHttpLink({
        uri: `${process.env.REACT_APP_API}/graphql`,
        useGETForQueries: true
    }),
    cache: new InMemoryCache()
});

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Suspense fallback={<div>Loading App...</div>}>
                <RecipeList />
            </Suspense>
        </ApolloProvider>
    );
};

export default App;
