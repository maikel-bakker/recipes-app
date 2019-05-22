import React from 'react';
import { Recipe, IRecipe } from './Recipe';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

const GET_RECIPES = gql(`
    query getRecipes {
        recipes {
            _id,
            title,
            description
        }
    }
`);

export const RecipeList: React.FC = () => {
    const { data, loading, error } = useQuery(GET_RECIPES);

    if (error) return <div>Error {error}</div>;
    if (loading) return <div>Loading recipes...</div>;

    return (
        <ul>
            {data.recipes.map((recipe: IRecipe) => (
                <li key={recipe._id}>
                    <Recipe recipe={recipe}/>
                </li>
            ))}
        </ul>
    );
}
