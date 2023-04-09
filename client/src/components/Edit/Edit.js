import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import styles from './Edit.module.css'

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { recipeServiceFactory } from "../../services/recipeService";
import { RecipeContext } from '../../contexts/RecipesContext';

export const Edit = () => {
    const { onEditSubmit } = useContext(RecipeContext)
    const { recipeId } = useParams();
    const recipeService = useService(recipeServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        title: '',
        category: '',
        timePreparation: '',
        ingridients: '',
        image: '',
        preparation: ''
    }, onEditSubmit);

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                changeValues(result)
            });

    }, [recipeId])

    return (
        <section id="edit-page" className="auth">
            <form id="edit" method="post" onSubmit={onSubmit} className={styles.EditRecipe}>
                <div className="container">
                    <h1>Edit Recipe</h1>

                    <label htmlFor="title">Title:</label>
                    <input value={values.title} onChange={changeHandler} type="text" id="title" name="title" placeholder="Enter recipe..." />

                    <label htmlFor="cars">Category:</label>

                    <select className={styles.category} name="category" value={values.category} onChange={changeHandler} >
                        <option value="Desserts">Desserts</option>
                        <option value="Salads">Salads</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Meat">Meat&BBQ</option>
                        <option value="Fish">Fish&Chips</option>
                        <option value="Pizza">Pizza&Pasta</option>

                    </select>

                    <label htmlFor="timePreparation">Time preparation:</label>
                    <input value={values.timePreparation} onChange={changeHandler} type="text" id="timePreparation" name="timePreparation" min="1" placeholder="1" />

                    <label htmlFor="ingridients">Ingridients:</label>
                    <input value={values.ingridients} onChange={changeHandler} type="text" id="ingridients" name="ingridients" min="1" placeholder="1" />

                    <label htmlFor="img">Image:</label>
                    <input value={values.image} onChange={changeHandler} type="text" id="imageUrl" name="image" placeholder="Upload a photo..." />

                    <label htmlFor="preparation">Prearation:</label>
                    <textarea className={styles.preparation} name="preparation" id="preparation" value={values.preparation} onChange={changeHandler}></textarea>
                    <input className={styles.btnSubmit} type="submit" value="Edit Recipe" />
                </div>
            </form>
        </section>
    )
}