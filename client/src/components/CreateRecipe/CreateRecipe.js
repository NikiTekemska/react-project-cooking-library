import { useState } from "react";
import styles from './CreateRecipe.module.css';
export const CreateRecipe = ({
    onCreateSubmit
}) => {
    const [values, setValues] = useState({
        name:'',
        category:'',
        timePreparation:'',
        ingridients:'',
        preparation:'',
        image:''
    });

    const onCreateHandler = (e) => {
        setValues(state => ({...state, [e.target.name]:e.target.value}))
    }

    const onSubmit= (e) => {
        e.preventDefault();
        onCreateSubmit(values);
    };
    return(
        <section id="create-page" className="auth">
             <form id="create" onSubmit={onSubmit} className={styles.CreateRecipe}>
                <div className="container">
                    <h1>Create Recipe</h1>

                    <label htmlFor="title">Title:</label>
                    <input value={values.name} onChange={onCreateHandler} type="text" id="title" name="name" placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input value={values.category} onChange={onCreateHandler} type="text" id="category" name="category" placeholder="Enter category..." />

                    <label htmlFor="timePreparation">Time preparation:</label>
                    <input value={values.timePreparation} onChange={onCreateHandler} type="text" id="timePreparation" name="timePreparation" min="1" placeholder="1" />

                    <label htmlFor="ingridients">Ingridients:</label>
                    <input value={values.ingridients} onChange={onCreateHandler} type="text" id="ingridients" name="ingridients" min="1" placeholder="1" />

                    <label htmlFor="img">Image:</label>
                    <input value={values.image} onChange={onCreateHandler} type="text" id="imageUrl" name="image" placeholder="Upload a photo..." />

                    <label htmlFor="preparation">Prearation:</label>
                    <textarea name="preparation" id="preparation" value={values.preparation} onChange={onCreateHandler}></textarea>
                    <input className="btn submit" type="submit" value="Create Recipe" />
                </div>
            </form>
        </section>
    )
}