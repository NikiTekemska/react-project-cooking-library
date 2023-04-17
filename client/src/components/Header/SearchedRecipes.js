import { useContext } from "react";
import { RecipeCard } from "../Catalog/RecipeCard/RecipeCard";
import { RecipeContext } from "../../contexts/RecipesContext";
import styles from './SearchedRecipes.module.css';

export const SearchedRecipes = () => {
    const { matches } = useContext(RecipeContext);

    return (
        <>
            {(matches.length === 0) ?
                <p className={styles.Matches}> No matches found.</p>
                : <div>{matches.map((match) => <RecipeCard key={match._id} {...match} />)}</div>
            }
        </>



    )
}