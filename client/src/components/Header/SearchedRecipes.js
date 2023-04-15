import { useContext } from "react";
import { RecipeCard } from "../Catalog/RecipeCard/RecipeCard";
import { RecipeContext } from "../../contexts/RecipesContext";
export const SearchedRecipes = () => {
    const { matches } = useContext(RecipeContext);

    return (
        <>
            {(matches.length === 0) ?
                <p> No matches found.</p>
                : <div>{matches.map((match) => <RecipeCard key={match._id} {...match} />)}</div>
            }
        </>



    )
}