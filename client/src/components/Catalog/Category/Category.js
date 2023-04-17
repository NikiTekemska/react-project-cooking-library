import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from './Category.module.css';
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { useService } from "../../../hooks/useService";
import { recipeServiceFactory } from "../../../services/recipeService";

export const Category = () => {
    const { category } = useParams();
    const [categoryRecipes, setCategoryRecipes] = useState([]);
    const recipeService = useService(recipeServiceFactory)

    useEffect(() => {
        recipeService.getCategoryAll(category)
            .then(data => {
                setCategoryRecipes(data);
            })
    }, [category]);

    return (
        <>
            <div className={styles.categoryName}>
                <h1>{category}</h1>
                {/* <img className={styles.categoryImg} src={categoryRecipes.image} alt="img" /> */}
                {/* <h3>Best way to finish your meal.</h3> */}
            </div>
            {(categoryRecipes.length === 0) ? <p className={styles.noRecipe}>No recipes yet!</p> :
                <div>{categoryRecipes.map(x => <RecipeCard key={x._id} {...x} />)}</div>
            }

        </>
    )
}