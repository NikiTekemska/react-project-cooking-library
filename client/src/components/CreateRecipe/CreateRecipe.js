import { RecipeContext } from "../../contexts/RecipesContext";
import { useForm } from "../../hooks/useForm";
import styles from './CreateRecipe.module.css';
import { useContext } from "react";

export const CreateRecipe = () => {
    const { onCreateSubmit } = useContext(RecipeContext)
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        category: '',
        timePreparation: '',
        ingridients: '',
        preparation: '',
        image: ''
    }, onCreateSubmit);


    return (
        <section id="create-page" className="auth">
            <form id="create" method="post" onSubmit={onSubmit} className={styles.CreateRecipe}>
                <div className="container">
                    <h1>Create Recipe</h1>

                    <label htmlFor="title">Title:</label>
                    <input value={values.title} onChange={changeHandler} type="text" id="title" name="title" placeholder="Enter recipe..." />

                    <label htmlFor="cars">Category:</label>

                    <select className={styles.category} name="category" value={values.category} onChange={changeHandler} >
                        <option value="Desserts">Desserts</option>
                        <option value="Salads">Salads</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Meat&BBQ">Meat&BBQ</option>
                        <option value="Fish&Chips">Fish&Chips</option>
                        <option value="Pizza&Pasta">Pizza&Pasta</option>

                    </select>

                    <label htmlFor="timePreparation">Time preparation:</label>
                    <input value={values.timePreparation} onChange={changeHandler} type="text" id="timePreparation" name="timePreparation" min="1" placeholder="1" />

                    <label htmlFor="ingridients">Ingridients:</label>
                    <input value={values.ingridients} onChange={changeHandler} type="text" id="ingridients" name="ingridients" min="1" placeholder="1" />

                    <label htmlFor="img">Image:</label>
                    <input value={values.image} onChange={changeHandler} type="text" id="imageUrl" name="image" placeholder="Upload a photo..." />

                    <label htmlFor="preparation">Prearation:</label>
                    <textarea className={styles.preparation} name="preparation" id="preparation" value={values.preparation} onChange={changeHandler}></textarea>
                    <input className={styles.btnSubmit} type="submit" value="Create Recipe" />
                </div>
            </form>
        </section>
    )
}