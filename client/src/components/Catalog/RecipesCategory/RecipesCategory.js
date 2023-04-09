import styles from './Recipes.module.css';
import { useEffect, useState } from 'react';
import { CategoryCard } from '../CategoryCard/CategoryCard';

const baseUrl = 'http://localhost:3030/jsonstore/category'
export const RecipesCategory = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                setCategory(Object.values(data));
            })

    }, []);

    return (
        <section className={styles.recipes}>
            <h1>Recipes</h1>
            <ul>
                {category.map(x => <CategoryCard key={x.title} {...x} />)}
            </ul>
        </section>

    )
}