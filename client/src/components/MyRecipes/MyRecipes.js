import { useContext, useEffect, useState } from "react"
import { useService } from "../../hooks/useService"
import { recipeServiceFactory } from "../../services/recipeService"
import { AuthContext } from "../../contexts/AuthContext";
import styles from './MyRecipes.module.css';

import { RecipeCard } from "../Catalog/RecipeCard/RecipeCard";

export const MyRecipes = () => {
    const recipeService = useService(recipeServiceFactory);
    const [mineRecipe, setMineRecipe] = useState([]);
    const { userId } = useContext(AuthContext);
    useEffect(() => {
        recipeService.getAllMine(userId)
            .then(data => {
                setMineRecipe(data);
            })
    }, [userId]);
    return (
        <>
            <div className={styles.MyRecipes}>
                <h1>My Recipes</h1>
                {/* <img className='' src='' alt="img" />
                <h3>Best way to finish your meal.</h3> */}
            </div>
            {(mineRecipe.length === 0) ? <p className={styles.noRecipe}>No recipes yet!</p> :
                <div>{mineRecipe.map(x => <RecipeCard key={x._id} {...x} />)}</div>
            }

        </>
    )
}