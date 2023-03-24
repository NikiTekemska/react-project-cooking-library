import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from './Category.module.css';
import { CategoryRecipes } from "../CategoryRecipes/CategoryRecipes";

export const Category = () => {
    const baseUrl = 'http://localhost:3030/jsonstore/recipes'
    const { category } = useParams();
    const [categoryRecipes, setCategoryRecipes] = useState({});

    useEffect(() => {
        fetch(`${baseUrl}/${category}`)
            .then(res => res.json())
            .then(data => {
                setCategoryRecipes(data);
            })
    }, [category]);

    return (
        <>
            <div className={styles.categoryName}>
                <h1>{categoryRecipes.name}</h1>
                <img className={styles.categoryImg} src={categoryRecipes.image} alt="img" />
                <h3>Best way to finish your meal.</h3>
            </div>
            <CategoryRecipes baseUrl={baseUrl} />

        </>
    )
}